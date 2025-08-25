import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Project, BlogPost } from '@/types';
import { calculateReadingTime, generateSlug } from './utils';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const blogDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all project files
 */
export function getProjectSlugs(): string[] {
  try {
    const filenames = fs.readdirSync(projectsDirectory);
    return filenames.map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.warn('Projects directory not found, returning empty array');
    return [];
  }
}

/**
 * Get all blog post files
 */
export function getBlogSlugs(): string[] {
  try {
    const filenames = fs.readdirSync(blogDirectory);
    return filenames.map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.warn('Blog directory not found, returning empty array');
    return [];
  }
}

/**
 * Get project data by slug
 */
export function getProjectBySlug(slug: string): Project | null {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: realSlug,
      title: data.title || '',
      description: data.description || '',
      longDescription: data.longDescription,
      image: data.image || '/images/default-project.jpg',
      tech: data.tech || [],
      links: {
        github: data.github,
        live: data.live,
        demo: data.demo,
      },
      featured: data.featured || false,
      createdAt: data.createdAt || new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Get blog post data by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\\.md$/, '');
    const fullPath = path.join(blogDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    const readingTime = calculateReadingTime(content);

    return {
      slug: realSlug,
      title: data.title || '',
      description: data.description || '',
      content: contentHtml,
      image: data.image,
      tags: data.tags || [],
      publishedAt: data.publishedAt || new Date().toISOString(),
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      // Featured projects first, then by date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return projects;
}

/**
 * Get all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPostBySlug(slug);
      return post;
    })
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(limit: number = 3): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured).slice(0, limit);
}

/**
 * Get recent blog posts
 */
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}

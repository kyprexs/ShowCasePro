export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
  createdAt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

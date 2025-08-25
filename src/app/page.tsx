import { Layout } from '@/layouts';
import { Hero } from '@/sections';

export default function HomePage() {
  return (
    <Layout enableSnapScroll={true}>
      <Hero />
      {/* Additional sections will be added here */}
      <div className="min-h-screen flex items-center justify-center bg-white snap-section" id="about">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Section</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 snap-section" id="projects">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects Section</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-white snap-section" id="blog">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog Section</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 snap-section" id="contact">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Section</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </Layout>
  );
}

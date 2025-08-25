import React from 'react';
import { Header, Footer } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  enableSnapScroll?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '',
  enableSnapScroll = false 
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main 
        className={`flex-1 ${enableSnapScroll ? 'snap-container' : ''}`}
        role="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

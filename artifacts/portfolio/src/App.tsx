import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FeaturedWork } from '@/components/FeaturedWork';
import { Leadership } from '@/components/Leadership';
import { Skills } from '@/components/Skills';
import { Currently } from './components/Currently';
import { Awards } from '@/components/Awards';
import { Contact } from '@/components/Contact';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative selection:bg-secondary selection:text-white">
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <FeaturedWork />
            <Leadership />
            <Skills />
            <Awards />
            <Currently />
          </main>
          <Contact />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
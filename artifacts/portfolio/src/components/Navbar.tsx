import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Diturunkan ke 50 agar deteksi scroll di layar pendek HP lebih responsif
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mencegah halaman utama di-scroll saat menu mobile terbuka penuh
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-primary/95 backdrop-blur-md text-white border-b border-white/10 shadow-sm" 
            : "bg-transparent text-foreground"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-[5vw] h-20 flex items-center justify-between">
          <a 
            href="#top" 
            onClick={(e) => scrollToAnchor(e, '#top')}
            className={cn(
              "font-display font-bold text-xl tracking-tight z-50 transition-colors duration-200",
              mobileMenuOpen ? "text-white" : (scrolled ? "text-white" : "text-primary")
            )}
          >
            Nahel Zaqi Alfian
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToAnchor(e, link.href)}
                className={cn(
                  "transition-colors duration-200",
                  scrolled ? "hover:text-secondary text-white/80" : "hover:text-secondary text-foreground/80"
                )}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/CV.pdf"
              download="CV.pdf"
              className="bg-secondary text-white px-5 py-2.5 rounded-md font-semibold hover:bg-secondary/90 transition-colors cursor-pointer"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className={cn(
              "md:hidden z-50 p-2 -mr-2 transition-colors duration-200",
              mobileMenuOpen ? "text-white" : (scrolled ? "text-white" : "text-primary")
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay: Animasi Slide dari Atas penuh */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-primary text-white flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden"
          >
            <div className="dark-noise-overlay" />
            <div className="flex flex-col items-center gap-6 text-xl font-display font-bold relative z-10 w-full px-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToAnchor(e, link.href)}
                  className="hover:text-secondary transition-colors py-2 block text-center w-full max-w-xs border-b border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                href="/CV.pdf"
                download="CV.pdf"
                className="mt-6 bg-secondary text-white text-center w-full max-w-xs py-3.5 rounded-md font-sans text-base font-semibold hover:bg-secondary/90 transition-colors shadow-lg"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
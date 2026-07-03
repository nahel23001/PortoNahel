import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero: React.FC = () => {
  const { hero } = content;
  
  // Split name for word-by-word animation
  const nameWords = hero.name.split(' ');

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative min-h-[100dvh] pt-28 pb-16 sm:pt-32 sm:pb-20 px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto flex flex-col justify-center overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs sm:text-base tracking-[0.15em] text-foreground/60 uppercase"
          >
            {hero.eyebrow}
          </motion.div>
          
          {/* Ukuran dinamis clamp disesuaikan mulai dari 40px agar aman di HP terkecil */}
          <h1 className="font-display font-black leading-[0.95] text-[clamp(40px,9vw,120px)] -ml-0.5 text-primary tracking-tight">
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + (i * 0.1) 
                }}
                className="inline-block mr-[3vw] mb-1 sm:mb-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-3 sm:gap-4 mt-1 max-w-xl"
          >
            <h2 className="text-lg sm:text-2xl font-semibold text-secondary leading-snug">
              {hero.tagline}
            </h2>
            <p className="text-sm sm:text-lg text-foreground/80 leading-relaxed">
              {hero.subDescription}
            </p>
          </motion.div>

          {/* Tombol aksi: w-full otomatis penuh di HP, kembali normal di laptop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto"
          >
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="bg-secondary text-white w-full sm:w-auto text-center px-8 py-3.5 rounded-md font-semibold text-sm sm:text-base hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              View Work
            </a>
            <a 
              href="/CV.pdf"
              download="CV.pdf"
              className="bg-transparent border border-foreground/20 text-foreground w-full sm:w-auto text-center px-8 py-3.5 rounded-md font-semibold text-sm sm:text-base hover:bg-foreground/5 hover:border-foreground/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Portrait Panel: Foto ditaruh di atas teks saat di mobile (order-1) agar impresi jurnalisme langsung terasa */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 h-[40vh] sm:h-[50vh] lg:h-[70vh] w-full max-w-xs sm:max-w-md mx-auto lg:mx-0 relative order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-[24px] sm:rounded-[32px] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10" />
          <div className="w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-border bg-white">
            <img
              src="/foto-nahel.jpeg"
              alt="Nahel Zaqi Alfian"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
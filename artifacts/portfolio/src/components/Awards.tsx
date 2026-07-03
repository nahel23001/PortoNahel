import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '@/content';
import { SectionLabel } from './SectionLabel';

export const Awards: React.FC = () => {
  const { awards } = content;
  const containerRef = useRef<HTMLDivElement>(null);

  // For drag to scroll effect
  const handleDrag = (e: React.MouseEvent) => {
    const ele = containerRef.current;
    if (!ele) return;
    
    let isDown = true;
    let startX = e.pageX - ele.offsetLeft;
    let scrollLeft = ele.scrollLeft;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - ele.offsetLeft;
      const walk = (x - startX) * 2;
      ele.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <section id="awards" className="py-24 sm:py-32 relative bg-primary/5">
      <div className="px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto relative pt-12 mb-10">
        <SectionLabel folio="05 — AWARDS" />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-primary mt-8"
        >
          Recognitions
        </motion.h2>
      </div>

      <div 
        ref={containerRef}
        onMouseDown={handleDrag}
        className="flex overflow-x-auto gap-6 px-6 sm:px-8 lg:px-[5vw] pb-12 pt-4 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-none w-[300px] sm:w-[400px] snap-center bg-primary rounded-2xl p-8 relative overflow-hidden group shadow-lg"
          >
            <div className="dark-noise-overlay" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-secondary font-mono text-xl font-bold">
                  {award.year}
                </span>
                <h3 className="text-white font-display font-bold text-xl sm:text-2xl mt-4 leading-tight group-hover:text-white/90 transition-colors">
                  {award.title}
                </h3>
              </div>
              
              <div className="pt-6 border-t border-white/20 mt-auto">
                <p className="text-white/70 font-mono text-xs tracking-wider uppercase">
                  {award.event}
                </p>
              </div>
            </div>
            
            {/* Hover decorative accent */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
        {/* Spacer for right padding in scroll */}
        <div className="flex-none w-[5vw] sm:w-[5vw]" />
      </div>
    </section>
  );
};
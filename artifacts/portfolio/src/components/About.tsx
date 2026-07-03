import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '@/content';
import { SectionLabel } from './SectionLabel';
import { ImagePlaceholder } from './ImagePlaceholder';

const StatCounter: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = value / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col gap-1 sm:gap-2">
      <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-secondary">
        {count}
      </div>
      <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground/60 max-w-[120px]">
        {label}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const { about } = content;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto relative">
      <div className="relative pt-12">
        <SectionLabel folio="01 — ABOUT" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-8">
          
          {/* Left Panel: Image - Dibuat Responsif agar Tidak Kepanjangan di HP */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative aspect-square sm:aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/foto-field.png"
              alt="Nahel Zaqi Alfian — In Field Action"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Right Panel: Text */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 justify-center">
            
            <motion.blockquote 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl sm:text-3xl font-display font-medium italic text-primary border-l-4 border-secondary pl-5 sm:pl-6 leading-relaxed"
            >
              "{about.quote}"
            </motion.blockquote>
            
            <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stats Row - Responsif Grid untuk Layar Kecil */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border mt-2"
            >
              {about.stats.map((stat, i) => (
                <StatCounter key={i} value={stat.value} label={stat.label} />
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
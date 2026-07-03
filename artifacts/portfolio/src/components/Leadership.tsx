import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content';
import { SectionLabel } from './SectionLabel';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Leadership: React.FC = () => {
  const { leadership } = content;

  return (
    <section id="leadership" className="py-24 sm:py-32 relative">
      <div className="px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto relative pt-12">
        <SectionLabel folio="03 — LEADERSHIP" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-primary text-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative shadow-2xl"
        >
          {/* Noise Overlay */}
          <div className="dark-noise-overlay" />
          
          <div className="p-8 sm:p-16 lg:p-20 relative z-10">
            <div className="max-w-3xl">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-secondary font-mono text-sm tracking-widest uppercase mb-4"
              >
                {leadership.subtitle}
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8"
              >
                {leadership.title}
              </motion.h2>
              
              <div className="flex flex-col gap-5">
                {leadership.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="text-white/80 text-lg sm:text-xl leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Photo Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 sm:mt-24 grid grid-cols-3 gap-2 sm:gap-4"
            >
              {([
                { label: "Leadership 1", src: "/foto-leadership-1.jpeg" },
                { label: "Leadership 2", src: "/foto-leadership-2.jpg" },
                { label: "Leadership 3", src: "/foto-leadership-3.jpeg" },
              ] as { label: string; src: string | null }[]).map((photo) => (
                <div key={photo.label} className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-primary-foreground/10 border border-white/10 relative">
                  {photo.src
                    ? <img src={photo.src} alt={photo.label} className="w-full h-full object-cover object-center" />
                    : <ImagePlaceholder label={photo.label} theme="dark" />
                  }
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content';
import { SectionLabel } from './SectionLabel';

export const Skills: React.FC = () => {
  const { skills } = content as any;

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto relative">
      <div className="relative pt-12">
        {/* Label Section */}
        <SectionLabel folio="04 — TOOLS" />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills && skills.map((tool: any, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -4,
                  borderColor: 'var(--primary)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)'
                }}
                className="bg-white p-6 rounded-xl border border-primary/10 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Container Ikon */}
                  <div className="w-12 h-12 mb-5 flex items-center justify-start rounded-lg overflow-hidden text-foreground/70 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                    
                    {/* Adobe Premiere Pro */}
                    {tool.name === "Adobe Premiere Pro" && (
                      <div className="w-10 h-10 bg-[#1A002C] text-[#EA77FF] rounded-md flex items-center justify-center font-bold text-sm border border-[#EA77FF]/30 tracking-tight select-none">
                        Pr
                      </div>
                    )}

                    {/* Adobe Photoshop */}
                    {tool.name === "Adobe Photoshop" && (
                      <div className="w-10 h-10 bg-[#001E36] text-[#00C8FF] rounded-md flex items-center justify-center font-bold text-sm border border-[#00C8FF]/30 tracking-tight select-none">
                        Ps
                      </div>
                    )}

                    {/* Figma */}
                    {tool.name === "Figma" && (
                      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                        <path d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3H7.5v9H12zm-4.5 1.5A4.5 4.5 0 0 0 12 18c2.485 0 4.5-2.015 4.5-4.5V13.5H7.5zm0-6V7.5H12c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H7.5zm0 10.5V15h4.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H7.5zM16.5 12c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"/>
                      </svg>
                    )}

                    {/* Canva */}
                    {tool.name === "Canva" && (
                      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                        <path d="M21.914 10.01c-.13-.74-.49-1.39-1.04-1.89l.02-.02c-.52-.45-1.16-.74-1.89-.85-.14-.02-.27-.03-.41-.03-.89 0-1.7.39-2.28 1.02-.27.31-.48.67-.62 1.07-.46 1.25-.63 2.7-.63 4.19 0 .61.03 1.22.08 1.81.1.97.35 1.86.85 2.58.46.66 1.1 1.13 1.88 1.31.21.05.43.08.66.08.81 0 1.54-.31 2.11-.84.62-.57 1.01-1.36 1.14-2.27.05-.34.07-.69.07-1.05 0-1.81-.46-3.62-1.14-5.11zm-5.02 5.03c-.04-.54-.06-1.1-.06-1.65 0-1.27.14-2.48.49-3.52.12-.34.28-.65.48-.91.3-.4.73-.65 1.24-.65.1 0 .19.01.29.02.48.07.89.31 1.19.68.32.39.5.9.54 1.48.01.12.02.24.02.37 0 1.45-.37 2.91-.94 4.14-.15.34-.35.64-.59.88-.31.33-.74.52-1.22.52-.14 0-.28-.01-.42-.04-.51-.11-.91-.41-1.16-.83-.17-.29-.28-.62-.36-.99zM7.52 4.26c-.11-.02-.23-.03-.35-.03-.81 0-1.54.34-2.07.9a4.26 4.26 0 0 0-1.06 1.95c-.15.65-.19 1.37-.15 2.14.07 1.41.45 2.65 1.1 3.51.48.63 1.14 1.04 1.92 1.14.12.01.24.02.36.02.66 0 1.26-.22 1.76-.6.28-.21.52-.48.71-.79.35-.55.57-1.25.68-2.07.03-.23.05-.47.05-.72 0-1.42-.31-2.73-.89-3.75a3.74 3.74 0 0 0-1.67-1.59l-.7-.14zm.27 4.96c0 .19-.01.37-.03.56-.07.71-.24 1.3-.5 1.71-.18.29-.44.47-.76.47-.07 0-.14-.01-.2-.02-.37-.05-.68-.26-.88-.58-.22-.36-.36-.88-.42-1.53-.02-.2-.03-.4-.03-.61 0-1 .18-1.92.5-2.61.12-.27.28-.49.48-.65.23-.19.52-.29.84-.29.08 0 .16.01.24.02.39.06.72.28.93.61.22.35.37.85.45 1.49.02.14.02.28.02.43z"/>
                      </svg>
                    )}

                    {/* Microsoft Office */}
                    {tool.name === "Microsoft Office" && (
                      <svg role="img" viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
                        <path d="M12.22 0l11.43 4.14v15.72L12.22 24V0zm-11.4 4.3l10.15-1.83v18.98L.82 19.64V4.3z"/>
                      </svg>
                    )}

                  </div>
                  
                  {/* Nama Tool */}
                  <h3 className="text-lg font-bold mb-2 text-foreground">{tool.name}</h3>
                  
                  {/* Deskripsi */}
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {tool.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
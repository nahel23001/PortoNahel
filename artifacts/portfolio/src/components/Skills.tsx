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
                  <div className="w-12 h-12 mb-5 flex items-center justify-start rounded-lg overflow-hidden text-foreground/70 transition-colors duration-300">
                    
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

                    {/* Figma (Presisi Grid Resmi) */}
                    {tool.name === "Figma" && (
                      <svg viewBox="0 0 24 24" className="w-9 h-9 select-none" fill="none">
                        <path d="M9 3a3 3 0 0 0 0 6h3V3H9z" fill="#F24E1E" />
                        <circle cx="15" cy="6" r="3" fill="#FF7262" />
                        <path d="M9 9a3 3 0 0 0 0 6h3V9H9z" fill="#A259FF" />
                        <circle cx="15" cy="12" r="3" fill="#1ABC9C" />
                        <path d="M9 15a3 3 0 0 0-3 3 3 3 0 0 0 3 3h3v-6H9z" fill="#0ACF83" />
                      </svg>
                    )}

                    {/* Canva (Gradasi Pop Modern dengan Huruf C Putih) */}
                    {tool.name === "Canva" && (
                      <svg viewBox="0 0 24 24" className="w-9 h-9 select-none">
                        <defs>
                          <linearGradient id="canvaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00C4CC" />
                            <stop offset="100%" stopColor="#7D2AE8" />
                          </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="10" fill="url(#canvaGradient)" />
                        <path d="M14.5 8.5c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8.3-.3.5-.1.3.2-.5 0.8-1.4 1.3-2.3 1.3-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1 0 1.8 0.4 2.3 1.1.2 0.3 0 0.5-.3 0.2z" fill="white" />
                      </svg>
                    )}

                    {/* Microsoft Office (Warna Oranye Resmi Office) */}
                    {tool.name === "Microsoft Office" && (
                      <svg viewBox="0 0 24 24" className="w-9 h-9 select-none">
                        <path d="M1H16.5V23H1V4.5z" fill="#E64A19" opacity="0.1" />
                        <path d="M23 4.5L12.5 1v22L23 19.5V4.5z" fill="#E64A19" />
                        <path d="M12.5 3.5L2 5.5v13l10.5 2V3.5z" fill="#FF5722" />
                        <path d="M5.5 9.5h4v5h-4v-5z" fill="white" opacity="0.9" />
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
import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const Currently: React.FC = () => {
  return (
    <section id="currently" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto relative border-t border-foreground/5 bg-background">
      <div className="relative pt-12">
        
        {/* Label Section: Menggunakan Komponen Label Bawaan Template Kamu */}
        <SectionLabel folio="06 — CURRENTLY" />

        {/* Tanggal Ter-update di Pojok Kanan Atas */}
        <div className="absolute top-12 right-0 font-mono text-xs text-foreground/40 tracking-wider">
          Last updated: July 2026
        </div>

        {/* Container Utama: Kolom Teks Lebar 65-70% Berposisi Center */}
        <div className="mt-16 max-w-[800px] mx-auto bg-foreground/[0.02] dark:bg-foreground/[0.01] p-8 sm:p-12 rounded-2xl border border-foreground/5">
          
          {/* Heading Section */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10"
          >
            What I'm Thinking About
          </motion.h2>

          {/* Konten Esai Pendek dengan Garis Vertikal Coral Tipis di Sebelah Kiri */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[hsl(var(--primary))] space-y-6">
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-[19px] text-foreground/80 leading-relaxed font-normal"
            >
              Something that has been on my mind for a while now is the number of local newsrooms in Indonesia that have quietly shut down over the past few years. Not because they were bad at journalism, but because the business model stopped working. Ad revenue dried up, platforms took the traffic, and the people who were doing the actual reporting found themselves out of a job without much public notice.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg sm:text-[19px] text-foreground/80 leading-relaxed font-normal"
            >
              I think about this a lot because I am about to enter an industry that is genuinely uncertain. But I do not think the answer is to be pessimistic about it. What I keep coming back to is that the newsrooms that are surviving are mostly the ones that gave people a reason to trust them over time. Kompas is one of them. That is not an accident.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-[19px] text-foreground/80 leading-relaxed font-normal"
            >
              The other thing I have been following closely is how AI is starting to show up inside newsrooms, not just as a topic to report on but as a tool that reporters are actually using. Ethicheck, the platform I helped build during my contemporary journalism course, came from thinking about this directly. Can AI help journalists work more ethically and accurately, or does it just add another layer of noise? I do not have a clean answer yet, but I think asking the question seriously is more useful than either dismissing AI entirely or treating it like a solution to everything.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-lg sm:text-[19px] text-foreground/90 font-medium leading-relaxed"
            >
              Both of these things, the economics of local journalism and the role of AI in newsrooms, feel like they are going to define what journalism looks like in Indonesia for the next decade. I want to be someone who understands both from the inside, not just as a student who wrote a paper about them.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  );
};
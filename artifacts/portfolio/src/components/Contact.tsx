import React from 'react';
import { content } from '@/content';

export const Contact: React.FC = () => {
  const { contact } = content;

  return (
    <section id="contact" className="bg-[#0f172a] text-white py-24 sm:py-32 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        
        {/* BAGIAN 1: WHY KOMPAS (Teks Medium-Besar) */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-primary font-bold uppercase block mb-6 opacity-80">
            WHY KOMPAS
          </span>
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-medium max-w-[800px] mx-auto">
            Kompas has been covering Indonesia seriously for over five decades. The depth of reporting, 
            the commitment to verification, and the way Kompas approaches stories about ordinary people 
            are things I have been reading and paying attention to for a long time. 
            I am applying because the kind of journalism Kompas does is 
            the kind I want to learn how to do properly.
          </p>
        </div>

        {/* Garis Pemisah Tipis */}
        <div className="w-20 h-[1px] bg-white/20 mx-auto mb-16"></div>

        {/* BAGIAN 2: HEADING RAKSASA (Let's Talk) */}
        <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-6">
          {contact.title}
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto italic">
          {contact.subtitle}
        </p>

        {/* BAGIAN 3: LINKS (Horizontal & Clean) */}
        <div className="flex flex-col items-center gap-8">
          {/* Email Utama (Besar & Underline) */}
          <a 
            href={`mailto:${contact.email}`}
            className="text-2xl sm:text-3xl font-mono border-b-2 border-white/30 hover:border-primary transition-all pb-2"
          >
            {contact.email}
          </a>

          {/* Info Lain (Kecil, Horizontal di Desktop) */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 font-mono text-sm tracking-tighter opacity-60 uppercase">
            <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
              {contact.phone}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <span className="cursor-default">
              {contact.location}
            </span>
          </div>
        </div>

        {/* BAGIAN 4: FOOTER (Sangat Kecil & Bersih) */}
        <div className="mt-32 opacity-30">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase">
            {contact.footer}
          </p>
        </div>

      </div>
    </section>
  );
};
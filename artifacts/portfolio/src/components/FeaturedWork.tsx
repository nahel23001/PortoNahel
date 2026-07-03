import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content, ProjectCategory, Project } from '@/content';
import { SectionLabel } from './SectionLabel';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ProjectModal } from './ProjectModal';

export const FeaturedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { work } = content;

  const filteredProjects = work.projects.filter(p => 
    activeFilter === 'All' ? true : p.category === activeFilter
  );

  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-[5vw] max-w-[1280px] mx-auto relative">
      <div className="relative pt-12">
        <SectionLabel folio="02 — FEATURED WORK" />

        <div className="flex flex-col gap-10 mt-8">
          
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-primary"
            >
              Selected Stories
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {work.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat 
                      ? 'bg-secondary text-white shadow-md' 
                      : 'bg-transparent border border-border text-foreground hover:border-secondary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Bento Grid Responsif: Tinggi auto-rows dinonaktifkan di mobile, aktif hanya di desktop (md:) */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(project); } }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-primary/10 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-xl ${
                    project.isLarge 
                      ? 'w-full aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-2' 
                      : 'w-full aspect-[4/3] md:aspect-auto md:col-span-1 md:row-span-1'
                  }`}
                >
                  {/* Container Bingkai Gambar Mengunci Posisi dan Skala */}
                  <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
                    {project.image
                      ? <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                      : <ImagePlaceholder label={project.title} />
                    }
                  </div>
                  
                  {/* Gradasi Overlay Gelap Agar Teks Terbaca Jelas di Layar Kecil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10" />
                  
                  {/* Layout Konten Teks */}
                  <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end z-20">
                    <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 mb-2">
                      <span className="inline-block bg-secondary/90 text-white font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-bold text-xl sm:text-3xl leading-tight mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 line-clamp-2 text-xs sm:text-base max-w-lg transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.shortDescription}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
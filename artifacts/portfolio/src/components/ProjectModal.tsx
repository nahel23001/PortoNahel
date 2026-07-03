import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/content";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={project?.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto flex flex-col relative hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20 mix-blend-difference"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="w-full aspect-video sm:aspect-[21/9] relative bg-primary group/banner">
                {project.bannerImage ? (
                  project.previewLink ? (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full absolute inset-0"
                      aria-label={`Lihat preview ${project.title}`}
                    >
                      <img
                        src={project.bannerImage}
                        alt={`${project.title} banner`}
                        className="w-full h-full object-cover object-center transition-opacity duration-200 group-hover/banner:opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-opacity duration-200">
                        <span className="bg-black/70 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          {project.previewLabel ?? "Lihat Preview Figma"}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <img
                      src={project.bannerImage}
                      alt={`${project.title} banner`}
                      className="w-full h-full object-cover object-center"
                    />
                  )
                ) : (
                  <ImagePlaceholder
                    label={`${project.title} Banner`}
                    theme="dark"
                  />
                )}
              </div>

              <div className="p-8 sm:p-12 md:p-16 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-sm font-semibold">
                      {project.role}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground font-mono text-sm tracking-wide">
                    {project.tag}
                  </p>
                </div>

                <div className="w-full h-px bg-border" />

                <div className="prose prose-lg prose-p:leading-relaxed max-w-none text-foreground/80">
                  <p className="text-xl font-medium text-foreground mb-6">
                    {project.shortDescription}
                  </p>
                  <p>{project.detailDescription}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionLabelProps {
  folio: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ folio, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("font-mono text-xs sm:text-sm uppercase tracking-widest text-muted-foreground absolute top-0 left-0", className)}
    >
      {folio}
    </motion.div>
  );
};
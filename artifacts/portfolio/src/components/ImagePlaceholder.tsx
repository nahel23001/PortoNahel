import React from 'react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  theme?: 'light' | 'dark';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  label, 
  theme = 'light', 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "relative w-full h-full flex items-center justify-center overflow-hidden",
        theme === 'light' ? "bg-diagonal-stripes bg-[hsl(var(--muted))]" : "bg-diagonal-stripes-light bg-primary/20",
        className
      )}
      {...props}
    >
      <div className={cn(
        "font-mono text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm",
        theme === 'light' ? "bg-white/80 text-foreground" : "bg-black/50 text-white backdrop-blur-sm"
      )}>
        [ Photo — {label} ]
      </div>
    </div>
  );
};
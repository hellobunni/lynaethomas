import { Heart } from 'lucide-react';
import React from 'react'

export interface SectionHeadingProps {
  heading: string;
  description?: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const SectionHeading = ({heading, description, subtitle, icon: Icon}: SectionHeadingProps) => {
  return (
           <div className="text-center mb-16">
            
            {subtitle ? <div className="inline-flex items-center space-x-2 mb-6">
            {Icon ? <Icon className="w-6 h-6 text-primary" /> : <Heart className="w-6 h-6 text-primary" />}
            <span className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
              {subtitle}
            </span>
          </div> : null}
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
             {heading && heading}
           </h2>
           <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {description && description}
           </p>
         </div>
  )
}

export default SectionHeading
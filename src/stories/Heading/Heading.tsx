import React from 'react'

const SectionHeading = ({heading, description}: {heading: string, description: string}) => {
  return (
           <div className="text-center mb-16">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
             {heading && heading}
           </h2>
           <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {description && description}
           </p>
         </div>
  )
}

export default SectionHeading
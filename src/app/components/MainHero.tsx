import BrandTag from '@/stories/BrandTag/BrandTag'
import { Button } from '@/stories/Button'
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'

// TODO:
// - Make content more dynamic
// - Create new components for buttons and stats counter
// - Mobile hight and width

const MainHero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-4 lg:py-0">
       {/* <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-200/20 to-secondary/30"></div> */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main heading */}
                <div className="space-y-6">
                <BrandTag label={'Premium Digital Solutions'}>
        <Sparkles size={16} className="text-brand-600" strokeWidth={1.25} />
      </BrandTag> 

       <div>
       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight lg:-mb-6 -mb-10">
            <span className="block text-black">We are</span>
            <span className="block bg-gradient-to-r from-brand-300 to-brand-300/70 bg-clip-text text-transparent h-24">
              Matte Digital
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-2xl text-black/50 max-w-3xl mx-auto leading-relaxed mt-0">
            crafting digital experiences that turn ideas into{" "}
            <span className="inline-flex items-center">
              <Sparkles className="w-6 h-6 mx-1 text-brand-500 animate-pulse" />
              <span className="font-semibold text-brand-500">success</span>
              <Sparkles className="w-6 h-6 mx-1 text-brand-500 animate-pulse" />
            </span>
          </p>
       </div>

          <p className="text-sm max-w-2xl mx-auto">
            Specializing in Next.js development, MVP prototyping, and creating
            beautiful user experiences. We help businesses transform their ideas
            into pixel-perfect digital products that drive growth.
          </p>
        </div>
         {/* Call to action buttons */}
         <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-brand-500 text-white px-8 py-2 hover:bg-brand-600 cursor-pointer">View My Work 
           </div>
          
           <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-black px-8 py-2 border border-black/10 hover:bg-black/5 cursor-pointer">
            Read My Blog
          </div>
        </div>

         {/* Stats or social proof */}
         {/* TODO:  Animate the stats counter on page load*/}
         <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">
              Projects Delivered
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
        </div>

        
        </div>

        

      </div>
  )
}

export default MainHero
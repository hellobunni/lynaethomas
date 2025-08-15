import BrandTag from '@/stories/BrandTag/BrandTag'
import { Button, ButtonProps } from '@/stories/Button'
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
import StatsBar from './StatsBar'

// TODO:
// - Make content more dynamic
// - Create new components for buttons and stats counter
// - Mobile hight and width
export interface MainHeroProps {
  brandTag: {
    label: string
    icon?: React.ReactNode
  },
  // Main heading
  heading: {
    prefix: string
    highlight: string
  },
  hasSparkleText?: boolean,
  sparkleText?: string,
  subtitle?: string,
  description?: string,
  stats?: {
    value: string
    label: string
  }[],
  buttonGroup?: ButtonProps[],
  isHome?: boolean,
}
const MainHero = ({brandTag, heading, subtitle, hasSparkleText, sparkleText, description, stats, buttonGroup, isHome}: MainHeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-4 lg:py-0">
       {/* <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-200/20 to-secondary/30"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
{/* Brand tag */}
<div className="space-y-6">
         {brandTag &&  <BrandTag label={brandTag.label}>
            {brandTag.icon}
          </BrandTag>}
       <div>
      {heading &&  <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight lg:-mb-2 -mb-10">
            <span className="block text-black">{heading.prefix}</span>
            <span className="block bg-gradient-to-r from-brand-300 to-brand-300/70 bg-clip-text text-transparent h-26">
            {heading.highlight}
            </span>
          </h1>}

        {subtitle &&  <>
          <p className="text-xl sm:text-2xl lg:text-2xl text-black/50 max-w-6xl mx-auto leading-relaxed mt-3">
            {subtitle}
          </p>
          {hasSparkleText ? <span className="inline-flex items-center">
              <Sparkles className="w-6 h-6 mx-1 text-brand-500 animate-pulse" />
              <span className="font-semibold text-brand-500 text-2xl">{sparkleText}</span>
              <Sparkles className="w-6 h-6 mx-1 text-brand-500 animate-pulse" />
            </span> : null}</>}
       </div>

          {description && <p className="text-lg max-w-5xl mx-auto">
            {description}
          </p>}
          
        </div>
         {/* Call to action buttons */}
        {buttonGroup &&   <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {buttonGroup.map((button , index) => {return (
            <Button key={button.label} label={button.label} size={button.size} variant={index === 1 ? 'secondary': 'primary'} iconAfter={button.iconAfter} />
          )})}
        
        </div>}

        {stats && <StatsBar stats={stats} />}

        
        </div>

              {/* Scroll indicator */}
{isHome &&       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>}

      </section>
  )
}

export default MainHero
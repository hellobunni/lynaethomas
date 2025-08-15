import React from 'react'

type Stat = {
  value: string
  label: string
}
export interface StatsBarProps {
  stats: Stat[]
}

const StatsBar = ({stats}: StatsBarProps) => {
  /* Stats or social proof */
  /* TODO:  Animate the stats counter on page load*/
  return (
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
  )
}

export default StatsBar
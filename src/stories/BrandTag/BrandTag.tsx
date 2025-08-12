import React from 'react'
import { LucideIcon, Sparkles } from 'lucide-react'

export interface BrandTagProps {
  label: string
  children?: React.ReactNode
}

const BrandTag = ({ label,  children }: BrandTagProps) => {


  return (
    <div className="inline-flex items-center space-x-2 bg-brand-100/50 backdrop-blur-sm px-4 py-2 rounded-full  text-brand-700/75 border border-border/50">

      {children && children}
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

export default BrandTag

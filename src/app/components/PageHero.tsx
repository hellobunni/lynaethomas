import { Button } from '@/stories/Button';
import { ArrowLeft, Construction, LucideIcon } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

type ButtonGroup = {
  buttonText: string;
  buttonLink: string;
  buttonVariant: "primary" | "secondary" | "outline";
}
export interface PageHero {
  title: string;
  description: string;
  buttons?: ButtonGroup[]
  icon?: LucideIcon
}
const PageHero = ({ title, description, buttons, icon: Icon = Construction }: PageHero) => {
  return (
<section className="py-24 min-h-[60vh] flex items-center justify-center">
<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <Icon className="w-16 h-16 text-primary mx-auto mb-6" />
  <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
    {title}
  </h1>
  <p className="text-lg text-muted-foreground mb-8">{description}</p>
  <p className="text-muted-foreground mb-8">
    This page is coming soon! In the meantime, feel free to explore
    other sections or get in touch to discuss your project.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {/* Swapping `to` for `href` since we're using next/link, and making sure Link wraps the content for correct behavior */}
    <Button asChild>
      <Link href="/">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
    </Button>
    <Button variant="outline" asChild>
      {/* Swapping `to` for `href` since we're using next/link, and making sure Link wraps the content for correct behavior */}
      <Link href="/#contact">Get in Touch</Link>
    </Button>
  </div>
</div>
</section>
  )
}

export default PageHero
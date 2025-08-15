import { Button } from '@/stories/Button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's hop on a free consultation call to discuss your vision and how we can
              help bring it to life with beautiful, functional code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Initial Consultation</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">2-4 weeks</div>
                <div className="text-sm text-muted-foreground">Typical MVP Timeline</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CTASection
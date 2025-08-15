'use client'

import React from 'react'
import MainHero from '../components/MainHero'
import { ArrowRight, CheckCircle, Code2, Globe, Icon, Palette, Rocket, Target, Users } from 'lucide-react'
import SectionHeading from '@/stories/Heading/Heading'
import ProcessTimeline from '../components/ProcessTimeline'
import ServiceCard from '../components/ServiceCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/stories/Card/Card'
import { Badge } from '@/stories/Badge/Badge'
import { Button } from '@/stories/Button'
import CTASection from '../components/CTASection'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Custom React and Next.js applications built with modern best practices",
      features: [
        "React & Next.js Development",
        "TypeScript Integration",
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "Testing & Quality Assurance",
      ],
      price: "Starting at $75/hr",
      popular: false,
    },
    {
      icon: Rocket,
      title: "MVP Prototyping",
      description: "Rapid development of minimum viable products to validate your ideas",
      features: [
        "Fast Turnaround (2-4 weeks)",
        "Modern Tech Stack",
        "Core Feature Focus",
        "User Testing Ready",
        "Deployment & Hosting",
        "Scalable Architecture",
      ],
      price: "Starting at $3,000",
      popular: true,
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Transform your designs into pixel-perfect, interactive experiences",
      features: [
        "Figma to Code",
        "Design System Creation",
        "Component Libraries",
        "Accessibility Standards",
        "Cross-browser Testing",
        "Mobile Optimization",
      ],
      price: "Starting at $65/hr",
      popular: false,
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description: "Strategic guidance for your development projects and technical decisions",
      features: [
        "Architecture Planning",
        "Code Reviews",
        "Team Mentoring",
        "Technology Selection",
        "Performance Audits",
        "Best Practices Training",
      ],
      price: "Starting at $125/hr",
      popular: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We'll discuss your vision, goals, and requirements in a free 30-minute consultation.",
      icon: Target,
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "I'll create a detailed proposal with timeline, milestones, and technical approach.",
      icon: Globe,
    },
    {
      step: "03",
      title: "Development",
      description: "Regular updates and demos ensure we're building exactly what you envision.",
      icon: Code2,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment, testing, and ongoing support to ensure your success.",
      icon: Rocket,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Startup Founder",
      company: "TechFlow",
      content: "Matte Digital transformed our complex ideas into a beautiful, functional MVP in just 3 weeks. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      content: "Working with Matte Digital was seamless. They delivered a pixel-perfect implementation of our designs and provided valuable insights that improved the user experience.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "CEO",
      company: "GrowthPath",
      content: "Matte Digital's consulting helped us restructure our frontend architecture, resulting in 40% faster load times and a much more maintainable codebase.",
      rating: 5,
    },
  ];

  return (
    <div>
      <MainHero 
        brandTag={{
          label: "Available for New Projects",
          icon: <Rocket />
        }}
        heading={{
          prefix: 'Let\'s Build Something',
          highlight: 'Amazing Together',
        }} 
        subtitle="From concept to launch, we help startups and businesses create stunning frontend experiences that convert visitors into customers and ideas into successful products."
        buttonGroup={[
          {
            label: "Start Your Project",
            size: "lg",
            iconAfter: <ArrowRight />
          },
          {
            label: "View Portfolio",
            size: "lg",
            variant: "secondary"
          }
        ]}
      />
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading="Services & Expertise" description="Our proven approach ensures your project is delivered on time, within budget, and exceeds expectations." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
                            return (
                              <Card key={service.title} className={`relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                                {service.popular && (
                                  <Badge className="absolute -top-2 left-6 bg-primary text-primary-foreground">
                                    Most Popular
                                  </Badge>
                                )}
                                <CardHeader>
                                  <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                      <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                      <CardTitle className="text-xl">{service.title}</CardTitle>
                                      <CardDescription className="text-primary font-medium">
                                        {service.price}
                                      </CardDescription>
                                    </div>
                                  </div>
                                  <p className="text-muted-foreground">{service.description}</p>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-3">
                                    {service.features.map((feature) => (
                                      <li key={feature} className="flex items-center space-x-3">
                                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <Button 
                                    variant={service.popular ? "primary" : "outline"} 
                                    className="w-full mt-6"
                                  >
                                    Get Started
                                  </Button>
                                </CardContent>
                              </Card>
                            );
          })}
        </div>
        </div>
      </section>

      <section className="py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading heading="My Process" description="Whether you need a complete application, rapid prototype, or technical guidance, we've got you covered with modern solutions and expert execution." />

      
     
        </div>
        <ProcessTimeline steps={process} />
      </section>

      <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading="What Clients Say" description="Don't just take my word for it. Here's what some amazing clients have to say about working together." />
        </div>
      </section>

<CTASection />

    </div>
  )
}

export default Services
import React from 'react'
import MainHero from '../components/MainHero'
import { ArrowRight, Award, Code2, Coffee, Heart, Lightbulb, Palette, Rocket, Shield, Star, Target, Users, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/stories/Card/Card';
import { Badge } from '@/stories/Badge/Badge';
import { Button } from '@/stories/Button';

const Blog = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our heart into every project, treating your vision as our own and delivering work that exceeds expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Staying ahead of trends and technologies to ensure your digital presence is modern, fast, and future-proof.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing, clean code, and attention to detail ensure your project is built to last and scale.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships through transparent communication and reliable delivery.",
    },
  ];

  const expertise = [
    {
      category: "Frontend Technologies",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: Code2,
    },
    {
      category: "Design & UX",
      skills: ["Figma to Code", "Design Systems", "Responsive Design", "Accessibility", "Performance"],
      icon: Palette,
    },
    {
      category: "Development Process",
      skills: ["Agile Methodology", "Git Workflow", "Testing", "Code Reviews", "CI/CD"],
      icon: Rocket,
    },
    {
      category: "Business Solutions",
      skills: ["MVP Development", "Technical Consulting", "Architecture Planning", "Team Mentoring"],
      icon: Target,
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Rocket },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "24hr", label: "Response Time", icon: Zap },
  ];

  const journey = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started as a frontend developer with a passion for creating beautiful, functional web experiences.",
    },
    {
      year: "2022",
      title: "First Clients",
      description: "Began working with startups and small businesses, learning the art of translating ideas into digital reality.",
    },
    {
      year: "2023",
      title: "Agency Formation",
      description: "Officially launched Matte Digital as a boutique agency focused on premium frontend development and client success.",
    },
    {
      year: "2024",
      title: "Growing Impact",
      description: "Expanding our reach and impact, helping more businesses transform their digital presence and achieve their goals.",
    },
  ];
  return (
    <div>
      <MainHero             heading={{
        prefix: 'Crating Digital Experiences',
        highlight: 'That Matter',
      }} 
      
      brandTag={{
        label: 'Meet the Team Behind Matte Digital',
        icon: <Heart />
      }} 
      buttonGroup={[
        {
          label: "Start Your Project",
          size: "lg",
          iconAfter: <ArrowRight />
        },
        {
          label: "View Our Work",
          size: "lg",
          variant: "secondary"
        }
      ]}
    
      subtitle="We're a boutique digital agency that believes in the power of thoughtful design, clean code, and meaningful partnerships. Every project is an opportunity to create something extraordinary."/>

      

        {/* Story Section */}
        <section className="py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-brand-200-brand-800 leading-relaxed">
                  <p>
                    Matte Digital was born from a simple belief: that every business deserves 
                    a digital presence that truly represents their vision and drives growth. 
                    What started as a passion for frontend development has evolved into a 
                    comprehensive digital agency focused on delivering exceptional results.
                  </p>
                  <p>
                    We specialize in working with startups and growing businesses who need 
                    more than just a website—they need a digital partner who understands 
                    their goals and can translate them into beautiful, functional experiences 
                    that convert visitors into customers.
                  </p>
                  <p>
                    Our boutique approach means you get personalized attention, direct 
                    communication, and work that's crafted specifically for your unique 
                    needs. We don't believe in one-size-fits-all solutions.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="text-center">
                          <div className="w-12 h-12 bg-brand-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Icon className="w-6 h-6 text-brand-400" />
                          </div>
                          <div className="text-2xl font-bold text-brand-800">{stat.number}</div>
                          <div className="text-sm text-brand-200-brand-800">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-brand-200/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-brand-200-brand-800 max-w-2xl mx-auto">
                The principles that guide everything we do and shape how we work with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="border-border/50 hover:border-brand-400/20 transition-colors">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-brand-400/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand-400" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-200-brand-800">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-brand-200-brand-800 max-w-2xl mx-auto">
                The technologies and methodologies we use to bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.category} className="text-center group">
                    <div className="w-16 h-16 bg-brand-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-400/20 transition-colors">
                      <Icon className="w-8 h-8 text-brand-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-800 mb-4">{area.category}</h3>
                    <div className="space-y-2">
                      {area.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="mr-1 mb-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-24 bg-brand-200/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-brand-800 max-w-2xl mx-auto">
                From humble beginnings to helping businesses transform their digital presence.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {journey.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-3 h-3 bg-brand-400 rounded-full md:left-1/2 md:-translate-x-1.5 z-10"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-12 md:pl-0`}>
                      <Card className="border-border/50">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="text-brand-400 border-brand-400">
                              {item.year}
                            </Badge>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-brand-200-brand-800">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer for alignment */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
          {/* CTA Section */}
          <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Coffee className="w-6 h-6 text-brand-400" />
              <span className="text-sm text-brand-200-brand-800">Let's grab a virtual coffee</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-brand-200-brand-800 mb-8 max-w-2xl mx-auto">
              We'd love to learn more about your project and explore how we can help 
              bring your vision to life. Let's start with a conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" variant="primary">
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-brand-200-brand-800">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-brand-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-brand-400" />
                <span>No Pressure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-brand-400" />
                <span>Honest Advice</span>
              </div>
            </div>
          </div>
        </section>
        </div>
  )
}

export default Blog

"use client"
import React from 'react'
import PageHero from '../components/PageHero'
import MainHero from '../components/MainHero'
import { ArrowRight, Calendar, CheckCircle, Globe, Heart, Mail, MessageCircle, Navigation, Send, Star } from 'lucide-react'
import SectionHeading from '@/stories/Heading/Heading'
import { useState } from 'react'
import { Button } from '@/stories/Button'
import Footer from '../components/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/stories/Card/Card'
import { Field, Input } from '@/stories/Fields/InputFields/InputFields'
import { Textarea } from '@/stories/Fields/Textbox/Textbox'
import ContactCTA from '../components/ContactCTA'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message about your project",
      value: "hello@mattedigital.com",
      action: "mailto:hello@mattedigital.com",
      buttonText: "Send Email",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation",
      value: "Free consultation available",
      action: "#",
      buttonText: "Book Call",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Quick questions? Start a conversation",
      value: "Available Mon-Fri, 9AM-6PM EST",
      action: "#",
      buttonText: "Start Chat",
    },
  ];

  const projectTypes = [
    "Website Development",
    "Web Application",
    "MVP Prototype",
    "Website Redesign",
    "E-commerce Platform",
    "Landing Page",
    "Technical Consulting",
    "Ongoing Maintenance",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
    "Let's discuss",
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects range from 2-8 weeks depending on complexity. MVP prototypes typically take 2-4 weeks, while full websites can take 4-8 weeks.",
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and growing businesses. We offer flexible engagement models and can adapt to your budget and timeline.",
    },
    {
      question: "What's included in your services?",
      answer: "Our services include design implementation, frontend development, responsive design, performance optimization, and ongoing support. We provide everything needed for a production-ready solution.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support packages including maintenance, updates, and feature enhancements. We're here to help your project grow and evolve.",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <section className="py-24 min-h-[60vh] flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card border border-border rounded-2xl p-12 shadow-lg">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Thank You! 🎉
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We've received your message and will get back to you within 24 hours. 
                  We're excited to learn more about your project!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                  <Button variant="outline">
                    Browse Our Services
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div>
            <MainHero             heading={{
        prefix: 'Ready to Build Something',
        highlight: 'Extraordinary?',
      }} 
      
      brandTag={{
        label: 'Meet the Team Behind Matte Digital',
        icon: <Heart />
      }}
      subtitle="Whether you have a clear vision or just an idea, we're here to help bring your project to life. Let's discuss how we can create something amazing together."/>


              {/* Contact Methods */}
              <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading="Get in Touch" description="Choose the best way to reach us. We're here to answer questions and discuss your project"/>

        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{method.value}</p>
                      <Button variant="outline" className="w-full">
                        {method.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

                {/* Contact Form */}
                <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The more details you provide, the better we can understand your needs and 
                provide an accurate timeline and quote.
              </p>
            </div>

            <ContactCTA/>
          </div>
          
        {/* FAQ Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our process and services.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

                {/* Final CTA */}
                <section className="py-24 ">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't hesitate to reach out. We're here to help and provide honest, 
              no-pressure advice about your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Schedule a Free Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Portfolio
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Remote-First Agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        </section>


      </div>
  )
}

export default Contact
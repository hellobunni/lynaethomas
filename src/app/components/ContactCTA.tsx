"use client"

import { Button } from '@/stories/Button'
import { Field, Input } from '@/stories/Fields/InputFields/InputFields'
import { Textarea } from '@/stories/Fields/Textbox/Textbox'
import SectionHeading from '@/stories/Heading/Heading'
import { AtSign, CheckCircle, Heart, Send, User, Briefcase } from 'lucide-react'
import React, { useState } from 'react'

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", projectType: "" });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-2xl p-12 shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You! 🎉
            </h2>
            <p className="text-lg text-muted-foreground">
              We've received your message and will get back to you within 24
              hours. Let's create something amazing together!
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-24 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={Heart} 
          subtitle="Let's Collaborate" 
          heading="Let's Build Something Together" 
          description="Ready to transform your vision into a stunning digital experience? Let's discuss your project and create something extraordinary." 
        />
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Name" htmlFor="name" requiredMark>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  start={<User className="h-4 w-4" />}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </Field>

              <Field label="Email" htmlFor="email" hint="We never share your email." requiredMark>
                <Input 
                  id="email" 
                  placeholder="you@domain.com" 
                  start={<AtSign className="h-4 w-4" />}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </Field>
            </div>

            <Field label="Project Type" htmlFor="projectType" hint="What kind of project are you thinking about?" requiredMark>
              <Input 
                id="projectType" 
                placeholder="e.g., Website, App, Branding..." 
                start={<Briefcase className="h-4 w-4" />}
                value={formData.projectType}
                onChange={(e) => handleInputChange("projectType", e.target.value)}
                required
              />
            </Field>

            <Field label="Message" htmlFor="message" hint="What would you like to discuss?">
              <Textarea 
                id="message" 
                placeholder="Your message" 
                rows={4}
              />
            </Field>

            <div className="pt-4">
              <Button 
                type="submit" 
                label="Send Message" 
                size="xl" 
                variant="tertiary" 
                iconAfter={<Send />} 
              />
            </div>
          </form>
           {/* Additional info */}
           <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">24hr</div>
                <div className="text-sm text-muted-foreground">
                  Response Time
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">
                  Initial Consultation
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">Custom</div>
                <div className="text-sm text-muted-foreground">Solutions</div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default ContactCTA
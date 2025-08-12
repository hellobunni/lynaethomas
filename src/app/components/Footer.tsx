"use client"
import React, { useState } from 'react'
import BlogSubscription from './BlogSubscription'
import { Button } from '@/stories/Button';
import { Github, Twitter, Linkedin, Instagram, Mail, Send, Heart} from 'lucide-react';
import { Input } from '@/stories/Fields/InputFields/InputFields';
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log("Newsletter signup:", email);
    setIsSubscribed(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };
  
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@lynae.dev", label: "Email" },
  ];

  const footerLinks = {
    "Quick Links": [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Work With Me", href: "/work-with-me" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Frontend Development", href: "/services/frontend" },
      { label: "MVP Prototyping", href: "/services/mvp" },
      { label: "Technical Consulting", href: "/services/consulting" },
      { label: "Website Redesign", href: "/services/redesign" },
    ],
    Resources: [
      { label: "Tech Blog", href: "/blog?filter=tech" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Freebies", href: "/freebies" },
    ],
  };
  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Newsletter section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Stay in the Loop ✨
            </h3>
            <p className="text-muted-foreground mb-8">
              Get weekly insights on frontend development, career tips, and the
              latest in tech. Plus, exclusive resources just for subscribers!
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  🎉 Welcome to the community! Check your email for a special
                  welcome gift.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                          <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-brand-500 text-white px-8 py-2 hover:bg-brand-600 cursor-pointer">View My Work 
                          <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
              
              </form>
            )}
          </div>
        </div>
       

    </div>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="text-xl font-semibold text-foreground">
                Matte Digital
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We're a boutique digital agency specializing in premium frontend development
              and digital solutions. Our passion lies in creating beautiful, functional
              experiences that drive business growth. From startups to established brands,
              we help bring visions to life with cutting-edge technology and thoughtful design. 💜
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent hover:bg-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Matte Digital. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee ☕</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
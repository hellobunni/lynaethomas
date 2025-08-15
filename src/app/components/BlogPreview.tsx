"use client"

import { Badge } from '@/stories/Badge/Badge';
import { Button } from '@/stories/Button';
import SectionHeading from '@/stories/Heading/Heading'
import { ArrowRight, Calendar, Code2, Heart, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

type BlogCategory = "all" | "tech" | "lifestyle" | "glow-up";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "all">;
  date: string;
  readTime: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Beautiful UIs with Next.js and Tailwind CSS",
    excerpt:
      "Discover the latest techniques for creating stunning user interfaces that convert visitors into customers.",
    category: "tech",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Optimizing Development Workflows for Maximum Productivity",
    excerpt:
      "How we structure our development process for maximum efficiency and quality output in client projects.",
    category: "tech",
    date: "2024-01-12",
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "From Wireframes to MVP: A Complete Guide",
    excerpt:
      "Learn how to efficiently transform your ideas into functional prototypes that impress stakeholders.",
    category: "tech",
    date: "2024-01-10",
    readTime: "8 min read",
  },
  {
    id: "4",
    title: "Building Successful Client Relationships in Tech",
    excerpt:
      "Essential strategies for creating lasting partnerships and delivering exceptional results in digital projects.",
    category: "glow-up",
    date: "2024-01-08",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Essential VS Code Extensions for React Developers",
    excerpt:
      "A curated list of VS Code extensions that will supercharge your React development workflow.",
    category: "tech",
    date: "2024-01-05",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "Building a Digital Agency Brand That Converts",
    excerpt:
      "Strategic insights on establishing your agency's online presence and positioning for premium client acquisition.",
    category: "glow-up",
    date: "2024-01-03",
    readTime: "7 min read",
  },
];

const categoryIcons = {
  tech: Code2,
  lifestyle: Heart,
  "glow-up": Sparkles,
};

const categoryColors = {
  tech: "bg-primary/10 text-primary border-primary/20",
  lifestyle:
    "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800",
  "glow-up":
    "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
};

const BlogPreview = () => {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("all");

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  const filters: Array<{ key: BlogCategory; label: string; icon?: any }> = [
    { key: "all", label: "All Posts" },
    { key: "tech", label: "Tech", icon: Code2 },
    { key: "lifestyle", label: "Lifestyle", icon: Heart },
    { key: "glow-up", label: "Glow-Up", icon: Sparkles },
  ];
  
  return (
    <section className="py-24 bg-brand-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading="Latest from the Blog" description="Expert insights on frontend development, industry trends, and strategies for building successful digital products." />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "primary" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                label={filter.label}
                iconBefore={Icon && <Icon className="w-4 h-4" />}
              />
            );
          })}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const CategoryIcon = categoryIcons[post.category];
            return (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    className={`flex items-center space-x-1 ${categoryColors[post.category]}`}
                  >
                    <CategoryIcon className="w-3 h-3" />
                    <span className="capitalize">
                      {post.category.replace("-", " ")}
                    </span>
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>

                {/* Post content */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post meta */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium mr-1">Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      
      
    </section>
  )
}

export default BlogPreview
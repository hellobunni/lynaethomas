import SectionHeading from '@/stories/Heading/Heading'
import { Code2, Heart, Sparkles } from 'lucide-react';
import React from 'react'

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
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading heading="Latest from the Blog" description="Expert insights on frontend development, industry trends, and strategies for building successful digital products." />
      </div>
    </section>
  )
}

export default BlogPreview
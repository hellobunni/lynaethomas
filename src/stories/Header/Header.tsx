'use client';

import Link from 'next/link';
import './header.css';
import { Menu, MoonStar, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

type User = {
  name: string;
};

export type NavItem = {
  label: string;
  href: string;
}

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  navItems?: NavItem[];
}

export const Header = ({ user, onLogin, navItems, onLogout, onCreateAccount }: HeaderProps) => {
  // Local state for Storybook compatibility
  const [localTheme, setLocalTheme] = useState<'light' | 'dark'>('light');
  
  // Try to use the app's theme context, fall back to local state
  let theme: 'light' | 'dark' = localTheme;
  let toggleTheme: () => void;

  try {
    // Try to import and use the app's ThemeProvider
    const { useTheme } = require('../../app/components/ThemeProvider');
    const appTheme = useTheme();
    theme = appTheme.theme;
    toggleTheme = appTheme.toggleTheme;
  } catch {
    // Fallback for Storybook - manage theme locally
    toggleTheme = () => {
      const newTheme = localTheme === 'light' ? 'dark' : 'light';
      setLocalTheme(newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    };
  }

  const isDark = theme === 'dark';

  // Initialize theme for Storybook
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      setLocalTheme(initialTheme as 'light' | 'dark');
      
      if (initialTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  return (
    <header>
      <div className="storybook-header">
        <div className="flex items-center">
          <div className="rounded-sm bg-brand px-2.5 py-1 text-white font-semibold w-fit h-fit flex items-center justify-center">
            L
          </div>
          <h1>Matte Digital</h1>
        </div>
        <div className="flex items-center gap-10">
          {navItems && (
            <div className="items-center gap-10 hidden md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-link hover:text-gray-700">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-brand-700/60 hover:text-gray-700 hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Sun strokeWidth={1.25} className="w-6 h-6" />
            ) : (
              <MoonStar strokeWidth={1.25} className="w-6 h-6" />
            )}
          </button>
          <div className="md:hidden">
            {/* TODO: Add mobile menu */}
            <button>
              <Menu strokeWidth={1.25} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

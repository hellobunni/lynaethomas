import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Header } from './Header';

const meta = {
  title: 'Navigation/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const WithNavItems: Story = {
  args: { 
    navItems: [
      { label: 'Blog', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Work With Me', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const LoggedOut: Story = {};

export const ThemeToggle: Story = {
  args: {
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the dark/light mode toggle functionality. Click the theme button to switch between themes.',
      },
    },
  },
};

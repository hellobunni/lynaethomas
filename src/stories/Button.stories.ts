import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';
import { Rocket, Sparkles, Camera, Heart, ArrowRight, Download } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost', 'outline', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { 
    onClick: fn(),
    label: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcons: Story = {
  args: {
    iconBefore: Rocket,
    iconAfter: Sparkles,
  },
};

export const WithIconBefore: Story = {
  args: {
    iconBefore: Camera,
    label: 'Take Photo',
  },
};

export const WithIconAfter: Story = {
  args: {
    iconAfter: ArrowRight,
    label: 'Continue',
  },
};

export const DownloadButton: Story = {
  args: {
    iconBefore: Download,
    label: 'Download File',
    variant: 'outline',
  },
};

export const LikeButton: Story = {
  args: {
    iconBefore: Heart,
    label: 'Like',
    variant: 'ghost',
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BrandTag from './BrandTag';
import { Sparkles, Star, Zap } from 'lucide-react';

const meta = {
  title: 'Atoms/BrandTag',
  component: BrandTag,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof BrandTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Brand Tag',
  },
}



import type { Meta, StoryObj } from '@storybook/react';

const Test = () => {
  return <div>Test Component</div>;
};

const meta = {
  title: 'Example/Test',
  tags: ['autodocs'],
  component: Test,
} satisfies Meta<typeof Test>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

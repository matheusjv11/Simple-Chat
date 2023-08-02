import type { Meta, StoryObj } from '@storybook/react';

import MainChat from '.';

const meta: Meta<typeof MainChat> = {
  component: MainChat,
};

export default meta;
type Story = StoryObj<typeof MainChat>;

export const Primary: Story = {
  render: () => <MainChat />,
};
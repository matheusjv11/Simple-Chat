import type { Meta, StoryObj } from '@storybook/react';

import CreateChat from '.';

const meta: Meta<typeof CreateChat> = {
  component: CreateChat,
};

export default meta;
type Story = StoryObj<typeof CreateChat>;

export const Primary: Story = {
  render: () => <CreateChat />,
};
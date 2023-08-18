import type { Meta, StoryObj } from '@storybook/react';

import ChatHeader from '.';

const meta: Meta<typeof ChatHeader> = {
  component: ChatHeader,
};

export default meta;
type Story = StoryObj<typeof ChatHeader>;

export const Primary: Story = {
  render: () => <ChatHeader />,
};
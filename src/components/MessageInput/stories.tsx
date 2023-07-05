import type { Meta, StoryObj } from '@storybook/react';

import MessageInput from '.';

const meta: Meta<typeof MessageInput> = {
  component: MessageInput,
};

export default meta;
type Story = StoryObj<typeof MessageInput>;

export const Primary: Story = {
  render: () => <MessageInput />,
};
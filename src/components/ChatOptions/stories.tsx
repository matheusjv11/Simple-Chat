import type { Meta, StoryObj } from '@storybook/react';

import ChatOptions from '.';

const meta: Meta<typeof ChatOptions> = {
  component: ChatOptions,
};

export default meta;
type Story = StoryObj<typeof ChatOptions>;

export const Primary: Story = {
  render: () => <ChatOptions />,
};
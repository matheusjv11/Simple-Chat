import type { Meta, StoryObj } from '@storybook/react';

import SingleChatHeader from '.';

const meta: Meta<typeof SingleChatHeader> = {
  component: SingleChatHeader,
};

export default meta;
type Story = StoryObj<typeof SingleChatHeader>;

export const Primary: Story = {
  render: () => <SingleChatHeader />,
};
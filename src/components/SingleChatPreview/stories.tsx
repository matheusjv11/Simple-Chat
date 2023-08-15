import type { Meta, StoryObj } from '@storybook/react';

import SingleChatPreview from '.';

const meta: Meta<typeof SingleChatPreview> = {
  component: SingleChatPreview,
};

export default meta;
type Story = StoryObj<typeof SingleChatPreview>;

export const Primary: Story = {
  render: () => <SingleChatPreview />,
};
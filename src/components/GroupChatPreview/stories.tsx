import type { Meta, StoryObj } from '@storybook/react';

import GroupChatPreview from '.';

const meta: Meta<typeof GroupChatPreview> = {
  component: GroupChatPreview,
};

export default meta;
type Story = StoryObj<typeof GroupChatPreview>;

export const Primary: Story = {
  render: () => <GroupChatPreview />,
};
import type { Meta, StoryObj } from '@storybook/react';

import GroupChatHeader from '.';

const meta: Meta<typeof GroupChatHeader> = {
  component: GroupChatHeader,
};

export default meta;
type Story = StoryObj<typeof GroupChatHeader>;

export const Primary: Story = {
  render: () => <GroupChatHeader />,
};
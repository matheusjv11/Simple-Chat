import type { Meta, StoryObj } from '@storybook/react';

import MessagePreview from '.';

const meta: Meta<typeof MessagePreview> = {
  component: MessagePreview,
};

export default meta;
type Story = StoryObj<typeof MessagePreview>;

export const Primary: Story = {
  render: () => <MessagePreview />,
};
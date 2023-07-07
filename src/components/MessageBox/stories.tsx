import type { Meta, StoryObj } from '@storybook/react';

import MessageBox from '.';

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
};

export default meta;
type Story = StoryObj<typeof MessageBox>;

export const Primary: Story = {
  render: () => <MessageBox />,
};
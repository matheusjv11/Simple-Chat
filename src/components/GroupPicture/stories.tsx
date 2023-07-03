import type { Meta, StoryObj } from '@storybook/react';

import GroupPicture from '.';

const meta: Meta<typeof GroupPicture> = {
  component: GroupPicture,
};

export default meta;
type Story = StoryObj<typeof GroupPicture>;

export const Primary: Story = {
  render: () => <GroupPicture />,
};
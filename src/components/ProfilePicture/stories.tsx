import type { Meta, StoryObj } from '@storybook/react';

import ProfilePicture from '.';

const meta: Meta<typeof ProfilePicture> = {
  component: ProfilePicture,
};

export default meta;

type Story = StoryObj<typeof ProfilePicture>;

export const SingleUser: Story = {
  render: () => <ProfilePicture />,
};
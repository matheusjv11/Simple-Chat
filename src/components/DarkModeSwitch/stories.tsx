import type { Meta, StoryObj } from '@storybook/react';

import DarkModeSwitch from '.';

const meta: Meta<typeof DarkModeSwitch> = {
  component: DarkModeSwitch,
};

export default meta;
type Story = StoryObj<typeof DarkModeSwitch>;

export const Primary: Story = {
  render: () => <DarkModeSwitch />,
};
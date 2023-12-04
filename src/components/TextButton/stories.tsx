import type { Meta, StoryObj } from '@storybook/react'

import TextButton from '.'

const meta: Meta<typeof TextButton> = {
  component: TextButton
}

export default meta
type Story = StoryObj<typeof TextButton>

export const Primary: Story = {
  render: () => <TextButton label="Test" color="primary" />
}

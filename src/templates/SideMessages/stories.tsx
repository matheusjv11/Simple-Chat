import type { Meta, StoryObj } from '@storybook/react'

import SideMessages from '.'

const meta: Meta<typeof SideMessages> = {
  component: SideMessages
}

export default meta
type Story = StoryObj<typeof SideMessages>

export const Primary: Story = {
  render: () => <SideMessages />
}

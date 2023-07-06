import type { Meta, StoryObj } from '@storybook/react'

import IconButton, { AvailabelIconsEnum } from '.'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  args: {
    icon: 'send'
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['send']
    }
  }
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  render: (args) => <IconButton {...args} />
}

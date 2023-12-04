import type { Meta, StoryObj } from '@storybook/react'

import MessageInput from '.'

const meta: Meta<typeof MessageInput> = {
  component: MessageInput,
  parameters: {
    backgrounds: { default: 'dark' }
  }
}

export default meta
type Story = StoryObj<typeof MessageInput>

export const Primary: Story = {
  render: () => <MessageInput />
}

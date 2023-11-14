import type { Meta, StoryObj } from '@storybook/react'

import ChatBody from '.'

const meta: Meta<typeof ChatBody> = {
  component: ChatBody
}

export default meta
type Story = StoryObj<typeof ChatBody>

export const Primary: Story = {
  render: () => <ChatBody messages={[]} />
}

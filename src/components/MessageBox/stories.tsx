import type { Meta, StoryObj } from '@storybook/react'

import MessageBox from '.'

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
  argTypes: {
    message: 'String'
  }
}

export default meta
type Story = StoryObj<typeof MessageBox>

export const Primary: Story = {
  render: (args) => (
    <div style={{ backgroundColor: 'lightcoral', padding: '1rem' }}>
      <MessageBox {...args} />
    </div>
  )
}

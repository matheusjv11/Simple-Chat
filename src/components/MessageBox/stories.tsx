import type { Meta, StoryObj } from '@storybook/react'

import MessageBox from '.'
import { ExistingCharacters } from '@/database/Characters'

const meta: Meta<typeof MessageBox> = {
  component: MessageBox,
  args: {
    message: {
      content: "Let's defeat the lannisters!",
      dtSend: '2023-08-13 14:25:20',
      user: ExistingCharacters.ARYA
    }
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

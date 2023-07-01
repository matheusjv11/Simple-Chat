import { Story, Meta } from '@storybook/react/types-6-0'
import ProfilePicture from '.'

export default {
  title: 'ProfilePicture',
  component: ProfilePicture,
} as Meta

export const Basic: Story = (args) => <ProfilePicture {...args} />
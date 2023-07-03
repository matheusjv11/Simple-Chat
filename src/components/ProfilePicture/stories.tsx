import type { Meta, StoryObj } from '@storybook/react'

import ProfilePicture, { ProfilePictureProps } from '.'
import AryaImage from '../../../public/img/profiles/arya.png'

const meta: Meta<typeof ProfilePicture> = {
  component: ProfilePicture,
  args: {
    online: true,
    profile: AryaImage.src,
    profileAlt: "Arya's profile picture"
  }
}

export default meta

type Story = StoryObj<ProfilePictureProps>

export const SingleUser: Story = {
  render: (args) => <ProfilePicture {...args} />
}

import type { Meta, StoryObj } from '@storybook/react'

import GroupPicture from '.'

import AryaImage from '../../../public/img/profiles/arya.jpg'
import JonImage from '../../../public/img/profiles/jon.png'
import SansaImage from '../../../public/img/profiles/sansa.jpg'

const meta: Meta<typeof GroupPicture> = {
  component: GroupPicture
}

export default meta

type Story = StoryObj<typeof GroupPicture>

const threePictures = [AryaImage.src, JonImage.src, SansaImage.src]

export const ThreeMembers: Story = {
  render: () => <GroupPicture membersProfile={threePictures} />
}

const twoPictures = [AryaImage.src, SansaImage.src]

export const TwoMembers: Story = {
  render: () => <GroupPicture membersProfile={twoPictures} />
}

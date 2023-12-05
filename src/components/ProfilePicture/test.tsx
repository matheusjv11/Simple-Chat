import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/RenderUtils'
import ProfilePicture from '.'

import AryaImage from 'public/img/profiles/arya.jpg'

describe('<ProfilePicture />', () => {
  it('should render a profile picture with the aria-label', () => {
    renderWithTheme(
      <ProfilePicture
        profile={AryaImage.src}
        profileAlt="Arya's profile picture"
      />
    )

    expect(
      screen.getByRole('main', { name: /ProfilePicture/i })
    ).toHaveAttribute('aria-label', "Arya's profile picture")
  })
})

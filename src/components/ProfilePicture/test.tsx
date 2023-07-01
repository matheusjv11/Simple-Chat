import { render, screen } from '@testing-library/react'

import ProfilePicture from '.'

describe('<ProfilePicture />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfilePicture />)
    
    expect(
      screen.getByRole('heading', { name: /ProfilePicture/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
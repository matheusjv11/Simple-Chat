import { render, screen } from '@testing-library/react'

import MessagePreview from '.'

describe('<MessagePreview />', () => {
  it('should render the heading', () => {
    const { container } = render(<MessagePreview />)

    expect(
      screen.getByRole('heading', { name: /MessagePreview/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
import { render, screen } from '@testing-library/react'

import ChatOptions from '.'

describe('<ChatOptions />', () => {
  it('should render the heading', () => {
    const { container } = render(<ChatOptions />)

    expect(
      screen.getByRole('heading', { name: /ChatOptions/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
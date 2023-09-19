import { render, screen } from '@testing-library/react'

import DarkModeSwitch from '.'

describe('<DarkModeSwitch />', () => {
  it('should render the heading', () => {
    const { container } = render(<DarkModeSwitch />)

    expect(
      screen.getByRole('heading', { name: /DarkModeSwitch/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
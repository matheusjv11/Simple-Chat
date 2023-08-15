import { render, screen } from '@testing-library/react'

import SingleChatPreview from '.'

describe('<SingleChatPreview />', () => {
  it('should render the heading', () => {
    const { container } = render(<SingleChatPreview />)

    expect(
      screen.getByRole('heading', { name: /SingleChatPreview/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
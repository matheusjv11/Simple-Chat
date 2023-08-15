import { render, screen } from '@testing-library/react'

import GroupChatPreview from '.'

describe('<GroupChatPreview />', () => {
  it('should render the heading', () => {
    const { container } = render(<GroupChatPreview />)

    expect(
      screen.getByRole('heading', { name: /GroupChatPreview/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(
      <LinkWrapper right href="/my-link">
        Anything
      </LinkWrapper>
    )

    const children = screen.getByRole('link', { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link') // bom para testar url correta
  })
})

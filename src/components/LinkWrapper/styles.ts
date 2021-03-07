import styled from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  right: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: var(--medium);
  right: ${(props) => (props.right ? 'var(--medium)' : null)};
  left: ${(props) => (props.right ? null : 'var(--medium)')};
  color: var(--white);

  cursor: pointer;
  opacity: 1;

  h2 {
    display: flex;
    align-items: center;
    padding: 0 1.4rem 0 0.8rem;
    background-color: var(--highlight);
    border-radius: 23px;

    ${media.lessThan('medium')`
      display: none;
    `}
  }

  svg {
    background-color: var(--highlight);
    border-radius: 23px;
  }

  svg,
  h2 {
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    svg,
    h2 {
      opacity: 0.7;
    }
  }
`

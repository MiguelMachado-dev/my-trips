import styled from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  right: boolean
  hasBackground: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: var(--medium);
  right: ${(props) => (props.right ? 'var(--medium)' : null)};
  left: ${(props) => (props.right ? null : 'var(--medium)')};
  color: ${({ hasBackground }) =>
    hasBackground ? 'var(--background)' : 'var(--white)'};

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
    background-color: ${({ hasBackground }) =>
      hasBackground ? 'var(--highlight)' : null};
    border-radius: 23px;
  }

  svg,
  h2 {
    transition: ${({ hasBackground }) =>
      hasBackground ? 'opacity 0.3s ease-in-out' : 'color 0.3s ease-in-out'};
  }

  &:hover {
    svg,
    h2 {
      color: ${({ hasBackground }) =>
        hasBackground ? null : 'var(--highlight)'};
      opacity: ${({ hasBackground }) => (hasBackground ? '0.7' : null)};
    }
  }
`

import styled from 'styled-components'

type WentProps = {
  went: boolean
}

export const WentTag = styled.div<WentProps>`
  border: ${(props) =>
    props.went ? '2px solid #c5e478;' : '2px solid #ff6359;'};
  border-radius: 30px;
  width: fit-content;
  padding: 0.4rem 2.6rem;

  h1 {
    color: ${(props) => (props.went ? '#c5e478' : '#ff6359')};

    svg {
      margin-right: 0.8rem;
    }
  }
`

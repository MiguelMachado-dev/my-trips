import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);
  p {
    margin-bottom: var(--medium);
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const WentWrapper = styled.div`
  margin-top: 3.6rem;

  h2 {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
  }
`

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

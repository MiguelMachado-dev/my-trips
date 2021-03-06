import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Return to home" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
        deleniti, illum repudiandae molestiae, officiis distinctio enim
        temporibus nam veniam quibusdam quis debitis architecto magnam a
        perspiciatis, vel obcaecati ipsam consectetur.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate

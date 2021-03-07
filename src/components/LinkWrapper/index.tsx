import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
  right: boolean
}

const LinkWrapper = ({ href, children, right }: LinkWrapperProps) => (
  <S.Wrapper right={right}>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper

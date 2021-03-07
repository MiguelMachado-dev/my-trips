import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
  right: boolean
  hasBackground: boolean
}

const LinkWrapper = ({
  href,
  children,
  right,
  hasBackground,
}: LinkWrapperProps) => (
  <S.Wrapper right={right} hasBackground={hasBackground}>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper

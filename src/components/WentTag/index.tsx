import { CheckmarkCircleOutline } from '@styled-icons/evaicons-outline/CheckmarkCircleOutline'
import { SadCry } from '@styled-icons/fa-regular/SadCry'

import * as S from './styles'

import { PlacesTemplateProps } from 'templates/Places'

const WentTag = ({ place }: PlacesTemplateProps) => {
  console.log(place)

  if (place.went) {
    return (
      <S.WentTag went={place.went}>
        <h1>
          <CheckmarkCircleOutline size={32} />
          Já fui!
        </h1>
      </S.WentTag>
    )
  } else {
    return (
      <S.WentTag went={place.went}>
        <h1>
          <SadCry size={32} />
          Pretendo ir!
        </h1>
      </S.WentTag>
    )
  }
}

export default WentTag

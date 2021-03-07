import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import { CheckmarkCircleOutline } from '@styled-icons/evaicons-outline/CheckmarkCircleOutline'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
    went: boolean
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place?.description?.text ||
          'Um projeto para mostrar em um mapa os locais que já fui e planejo ir!'
        }
        canonical="https://my-trips.miguelmachado.dev"
        openGraph={{
          url: 'https://my-trips.miguelmachado.dev',
          title: `${place.name} - My Trips`,
          description:
            place?.description?.text ||
            'Um projeto para mostrar em um mapa os locais que já fui e planejo ir!',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name,
            },
          ],
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place?.description?.html || '' }}
          />
          <S.Gallery>
            {place?.gallery?.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
          <S.WentWrapper>
            <h2>Tags:</h2>
            <S.WentTag went={place.went}>
              {place.went ? (
                <h1>
                  <CheckmarkCircleOutline size={32} />
                  Já fui!
                </h1>
              ) : (
                <h1>
                  <CloseCircleOutline size={32} />
                  Pretendo ir!
                </h1>
              )}
            </S.WentTag>
          </S.WentWrapper>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

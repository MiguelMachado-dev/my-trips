import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um projeto para mostrar em um mapa os locais que já fui e planejo ir!"
        canonical="https://my-trips.miguelmachado.dev"
        openGraph={{
          url: 'https://my-trips.miguelmachado.dev',
          title: 'My Trips',
          description:
            'Um projeto para mostrar em um mapa os locais que já fui e planejo ir!',
          images: [
            {
              url: 'https://my-trips.miguelmachado.dev/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
          site_name: 'My Trips',
        }}
      />
      <LinkWrapper hasBackground={false} right href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

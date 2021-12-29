/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import { ImageScrollComponentFragment } from '../../lib/generated/graphql'
import { CarouselTransition, ImageItemWidth } from './definitions'
import { ImageItemComponent } from './ImageItemComponent'

interface ImageScrollComponentProps {
  fragment: ImageScrollComponentFragment
  transition: CarouselTransition
}

export const numImageItems = (
  fragment: ImageScrollComponentFragment
): number => {
  if (!fragment.images) {
    return 0
  } else {
    return fragment.images.filter((img) => img).length
  }
}

export const ImageScrollComponent = ({
  fragment,
  transition,
}: ImageScrollComponentProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = ImageItemWidth * transition.to
    }
  })

  if (!fragment.images || numImageItems(fragment) == 0) {
    return <></>
  } else {
    return (
      <div
        css={css`
          display: flex;
          overflow-x: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        `}
        ref={ref}
      >
        {fragment.images.map((image, index) =>
          image ? <ImageItemComponent key={index} fragment={image} /> : <></>
        )}
      </div>
    )
  }
}

ImageScrollComponent.fragment = gql`
  fragment ImageScrollComponent on CarouselImage {
    images {
      ...ImageItemComponent
    }
  }
  ${ImageItemComponent.fragment}
`

/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import { DescriptionComponentFragment } from '../../lib/generated/graphql'
import { CarouselTransition, ImageItemWidth } from './definitions'
import { ImageItemComponent } from './ImageItemComponent'
import { numImageItems } from './ImageScrollComponent'

interface InnerComponentProps {
  caption: string | null | undefined
}

const InnerComponent = ({ caption }: InnerComponentProps): JSX.Element => (
  <div
    css={css`
      flex-shrink: 0;
      scroll-snap-align: start;
      width: ${ImageItemWidth}px;
    `}
  >
    <p
      css={css`
        margin: 0px;
        padding: 4px 8px;
      `}
    >
      {caption}
    </p>
  </div>
)

interface DescriptionComponentProps {
  fragment: DescriptionComponentFragment
  transition: CarouselTransition
}

export const DescriptionComponent = ({
  fragment,
  transition,
}: DescriptionComponentProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = ImageItemWidth * transition.to
    }
  })
  console.log('numContentfulImageItems: ', numImageItems(fragment))
  if (!fragment.images || numImageItems(fragment) === 0) {
    return <></>
  } else {
    return (
      <div
        css={css`
          display: flex;
          overflow-x: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          /* padding: 8px; */
          border: solid 1px #414141;
        `}
        ref={ref}
      >
        {fragment.images.map((image, index) =>
          image ? <InnerComponent key={index} caption={image.caption} /> : <></>
        )}
      </div>
    )
  }
}

DescriptionComponent.fragment = gql`
  fragment DescriptionComponent on CarouselImage {
    images {
      caption
      ...ImageItemComponent
    }
  }

  ${ImageItemComponent.fragment}
`

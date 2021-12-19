/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { CarouselImage } from "./CarouselImageComponent";
import { CarouselItemFragment } from "./generated/graphql";

interface CarouselItemProps {
  fragment: CarouselItemFragment;
}

export const CarouselItem = ({ fragment }: CarouselItemProps): JSX.Element => (
  <div
    css={css`
      flex-shrink: 0;
      scroll-snap-align: start;
      background-color: black;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        width: 640px;
        height: 360px;
        align-items: center;
      `}
    >
      <CarouselImage fragment={fragment} />
    </div>
  </div>
);

CarouselItem.fragments = gql`
  fragment CarouselItem on Image {
    ...CarouselImage
  }
  ${CarouselImage.fragments}
`;

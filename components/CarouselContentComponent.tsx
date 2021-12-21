/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { CarouselItem } from "./CarouselItemComponent";
import { CarouselContentFragment } from "../lib/generated/graphql";

interface CarouselContentProps {
  fragment: CarouselContentFragment;
}

export const CarouselContent = ({
  fragment,
}: CarouselContentProps): JSX.Element => {
  return fragment.images ? (
    <div
      css={css`
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
      `}
    >
      {fragment.images.map((image, index) =>
        image ? <CarouselItem key={index} fragment={image} /> : <></>
      )}
    </div>
  ) : (
    <></>
  );
};

CarouselContent.fragments = gql`
  fragment CarouselContent on ImageGroup {
    images {
      ...CarouselItem

    }
    ${CarouselItem.fragments}
  }
`;

/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { CarouselImageFragment } from "./generated/graphql";

interface CarouselImageProps {
  fragment: CarouselImageFragment;
}

export const CarouselImage = ({ fragment }: CarouselImageProps): JSX.Element =>
  fragment.url ? <img src={fragment.url} alt="" /> : <></>;

CarouselImage.fragments = gql`
  fragment CarouselImage on Image {
    url
  }
`;

/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { CarouselImageFragment } from "../lib/generated/graphql";

interface CarouselImageProps {
  fragment: CarouselImageFragment;
}

export const CarouselImage = ({ fragment }: CarouselImageProps): JSX.Element =>
  fragment.url ? <img src={fragment.url} alt="" /> : <></>;

CarouselImage.fragment = gql`
  fragment CarouselImage on Image {
    url
  }
`;

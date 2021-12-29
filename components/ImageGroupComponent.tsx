/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { CarouselComponent } from "./CarouselComponent";
import { ImageGroupComponentFragment } from "../lib/generated/graphql";
import { ImageComponent } from "./ImageComponent";

export interface ImageGroupComponentProps {
  fragment: ImageGroupComponentFragment;
}

export const ImageGroupComponent = ({
  fragment,
}: ImageGroupComponentProps): JSX.Element => {
  const groupFragment = fragment;

  if (!groupFragment.images) {
    return <></>;
  } else if (groupFragment.images.length == 1) {
    return (
      <div>
        {groupFragment.images[0] ? (
          <ImageComponent fragment={groupFragment.images[0]} />
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return <CarouselComponent fragment={groupFragment} />;
  }
};

ImageGroupComponent.fragment = gql`
  fragment ImageGroupComponent on ImageGroup {
    images {
      ...ImageComponent
    }
  }
  ${ImageComponent.fragment}
`;

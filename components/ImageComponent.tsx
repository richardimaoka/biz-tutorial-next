/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { ImageComponentFragment } from "../lib/generated/graphql";

export interface ImageComponentProps {
  fragment: ImageComponentFragment;
}

export const ImageComponent = ({
  fragment,
}: ImageComponentProps): JSX.Element => {
  return fragment.url ? (
    <div>
      <div
        css={css`
          padding: 4px;
          display: flex;
          justify-content: center;
        `}
      >
        <img width="640" src={fragment.url} alt="" />
      </div>
      {fragment.caption ? <div>{fragment.caption}</div> : <></>}
    </div>
  ) : (
    <></>
  );
};

ImageComponent.fragments = gql`
  fragment ImageComponent on Image {
    url
    caption
  }
`;

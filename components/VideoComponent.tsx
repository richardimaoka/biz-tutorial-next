/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { VideoComponentFragment } from "../lib/generated/graphql";

export interface VideoComponentProps {
  fragment: VideoComponentFragment;
}

export const VideoComponent = ({
  fragment,
}: VideoComponentProps): JSX.Element => {
  if (!fragment.url || !fragment.platform) {
    return <></>;
  } else {
    return (
      <div>
        <div
          css={css`
            padding: 4px;
            display: flex;
            justify-content: center;
          `}
        >
          <iframe
            src={fragment.url}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>{fragment.caption}</div>
      </div>
    );
  }
};

VideoComponent.fragments = gql`
  fragment VideoComponent on Video {
    platform
    url
    caption
  }
`;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { VideoComponent } from "./VideoComponent";
import { ParagraphComponent } from "./paragraph/ParagraphComponent";
import { ImageGroupComponent } from "./ImageGroupComponent";
import { FoldableComponentFragment } from "../lib/generated/graphql";
import React, { useState } from "react";
import { FoldedIcon } from "./FoldedIcon";
import { UnfoldedIcon } from "./UnFoldedIcon";
import { switchExhaustivenessCheck } from "./switchExhaustivenessCheck";
import { ActionComponent } from "./action/ActionComponent";
import { ImageComponent } from "./ImageComponent";

export interface FoldableComponentProps {
  fragment: FoldableComponentFragment;
}

export const FoldableComponent = ({
  fragment,
}: FoldableComponentProps): JSX.Element => {
  const [folded, setFolded] = useState(true);

  const unfold = () => {
    setFolded(false);
  };
  const fold = () => {
    setFolded(true);
  };

  return fragment.shortDescription ? (
    <div>
      {folded ? (
        <div
          css={css`
            background-color: #aed5f3;
            display: flex;
          `}
          onClick={unfold}
        >
          <div>
            <FoldedIcon />
          </div>
          {fragment.shortDescription}
        </div>
      ) : (
        <div
          css={css`
            background-color: #aed5f3;
            display: flex;
          `}
          onClick={fold}
        >
          <div>
            <UnfoldedIcon />
          </div>
          {fragment.shortDescription}
        </div>
      )}
      {folded ? (
        <></>
      ) : (
        <div
          css={css`
            border: solid 1px #aed5f3;
            padding: 8px;
          `}
        >
          {fragment.elements ? (
            fragment.elements.map((element, index) => {
              if (element && element.__typename) {
                switch (element.__typename) {
                  case "Video":
                    return <VideoComponent key={index} fragment={element} />;
                  case "Command":
                    return <></>;
                  case "Output":
                    return <></>;
                  case "Paragraph":
                    console.log(element);
                    return (
                      <ParagraphComponent key={index} fragment={element} />
                    );
                  case "ImageGroup":
                    return (
                      <ImageGroupComponent key={index} fragment={element} />
                    );
                  case "Image":
                    return <ImageComponent key={index} fragment={element} />;
                  case "Action":
                    return <ActionComponent key={index} fragment={element} />;
                  default:
                    return switchExhaustivenessCheck(element.__typename);
                }
              } else <></>;
            })
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

FoldableComponent.fragments = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Image {
        ...ImageComponent
      }
      ... on Action {
        ...ActionComponent
      }
    }
  }

  ${VideoComponent.fragments}
  ${ParagraphComponent.fragments}
  ${ImageGroupComponent.fragments}
  ${ActionComponent.fragments}
  ${ImageComponent.fragments}
`;

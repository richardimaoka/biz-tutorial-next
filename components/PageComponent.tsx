/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { PageComponentFragment } from "../lib/generated/graphql";
import { ActionComponent } from "./ActionComponent";
import { CommandComponent } from "./CommandComponent";
import { FoldableComponent } from "./FoldableComponent";
import { ImageComponent } from "./ImageComponent";
import { ImageGroupComponent } from "./ImageGroupComponent";
import { OutputComponent } from "./OutputComponent";
import { PageTitle } from "./PageTitleComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { ProgressBar } from "./ProgressBar";
import { switchExhaustivenessCheck } from "./switchExhaustivenessCheck";
import { VideoComponent } from "./VideoComponent";

export interface PageComponentProps {
  fragment: PageComponentFragment;
}

export const PageComponent = ({
  fragment,
}: PageComponentProps): JSX.Element => {
  if (!fragment.title || !fragment.pageElements) {
    return <></>;
  } else {
    return (
      <main>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 768px;
              border: solid 1px #f9f9f9;
            `}
          >
            <div>
              {fragment.progress ? (
                <ProgressBar fragment={fragment.progress} />
              ) : (
                <></>
              )}
              <PageTitle title={fragment.title} />
              {fragment.pageElements.map((element, index) => {
                if (!element || !element.__typename) {
                  return <></>;
                } else {
                  switch (element.__typename) {
                    case "Video":
                      return <VideoComponent key={index} fragment={element} />;
                    case "Command":
                      return (
                        <CommandComponent key={index} fragment={element} />
                      );
                    case "Foldable":
                      return (
                        <FoldableComponent key={index} fragment={element} />
                      );
                    case "Output":
                      return <OutputComponent key={index} fragment={element} />;
                    case "Paragraph":
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
                }
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }
};

PageComponent.fragments = gql`
  fragment PageComponent on Page {
    title
    pageNum
    progress {
      ...ProgressBar
    }
    pageElements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Foldable {
        ...FoldableComponent
      }
      ... on Action {
        ...ActionComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on Output {
        ...OutputComponent
      }
      ... on Image {
        ...ImageComponent
      }
    }
  }
  ${VideoComponent.fragments}
  ${ParagraphComponent.fragments}
  ${ImageGroupComponent.fragments}
  ${FoldableComponent.fragments}
  ${ActionComponent.fragments}
  ${CommandComponent.fragments}
  ${OutputComponent.fragments}
  ${ImageComponent.fragments}
`;

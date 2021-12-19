/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { ParagraphComponentFragment } from "./generated/graphql";
import { TextChunkComponent } from "./TextChunkComponent";

interface ParagraphProps {
  fragment: ParagraphComponentFragment;
}

export const ParagraphComponent = ({
  fragment,
}: ParagraphProps): JSX.Element => {
  if (!fragment.chunks) {
    return <></>;
  } else {
    return (
      <div
        css={css`
          padding: 8px;
        `}
      >
        <p
          css={css`
            color: #0a0a0a;
            margin: 0px;
          `}
          contentEditable={false}
        >
          {fragment.chunks.map((chunk, index) =>
            chunk ? <TextChunkComponent key={index} fragment={chunk} /> : <></>
          )}
        </p>
      </div>
    );
  }
};

ParagraphComponent.fragments = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }

  ${TextChunkComponent.fragments}
`;

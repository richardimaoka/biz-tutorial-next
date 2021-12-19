/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ActionLabelComponent } from "./ActionLabelComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { gql } from "@apollo/client";
import { ActionComponentFragment } from "./generated/graphql";

export interface ActionProps {
  fragment: ActionComponentFragment;
}

export const ActionComponent = ({ fragment }: ActionProps): JSX.Element => {
  if (fragment.paragraph) {
    return (
      <div>
        <div
          css={css`
            display: flex;
          `}
        >
          <ActionLabelComponent />
        </div>
        <div
          css={css`
            border: solid 1px #eecf33;
          `}
        >
          <ParagraphComponent fragment={fragment.paragraph} />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

ActionComponent.fragments = gql`
  fragment ActionComponent on Action {
    paragraph {
      ...ParagraphComponent
    }
  }

  ${ParagraphComponent.fragments}
`;

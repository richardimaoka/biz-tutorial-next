/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { OutputComponentFragment } from "./generated/graphql";

export interface OutputComponentProps {
  fragment: OutputComponentFragment;
}

export const OutputComponent = ({
  fragment,
}: OutputComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 8px;
        background-color: #2d2d2d;
        color: white;
      `}
    >
      <pre>
        <code>{fragment.body}</code>
      </pre>
    </div>
  );
};

OutputComponent.fragments = gql`
  fragment OutputComponent on Output {
    body
  }
`;

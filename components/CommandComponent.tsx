/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { CommandComponentFragment } from "./generated/graphql";

interface CommandComponentProps {
  fragment: CommandComponentFragment;
}

export const CommandComponent = ({
  fragment,
}: CommandComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 8px;
        background-color: #2d2d2d;
        color: #ffffff;
      `}
    >
      <pre>
        <code>{fragment.command}</code>
      </pre>
    </div>
  );
};

CommandComponent.fragments = gql`
  fragment CommandComponent on Command {
    command
  }
`;

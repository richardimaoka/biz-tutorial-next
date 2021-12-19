/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DirectoryIcon } from "./DirectoryIcon";

interface DirectoryNodeProps {
  directoryname: string;
}

export const DirectoryNode = ({
  directoryname,
}: DirectoryNodeProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 4px;
        display: flex;
      `}
    >
      <DirectoryIcon />
      <div>{directoryname}</div>
    </div>
  );
};

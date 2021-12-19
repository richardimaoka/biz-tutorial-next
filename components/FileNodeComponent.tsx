/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FileIcon } from "./FileIcon";

interface FileNodeProps {
  filename: string;
}

export const FileNode = ({ filename }: FileNodeProps): JSX.Element => {
  return (
    <div
      css={css`
        padding: 4px;
        display: flex;
      `}
    >
      <FileIcon />
      <div>{filename}</div>
    </div>
  );
};

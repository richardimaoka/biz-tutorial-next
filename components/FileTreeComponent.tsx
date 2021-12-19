/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FileNode } from "./FileNodeComponent";

interface FileTreeProps {
  filenames: string[]; //it should be recursive file nodes
}

export const FileTree = ({ filenames }: FileTreeProps): JSX.Element => (
  <div
    css={css`
      padding: 4px;
      background-color: #2d2d2d;
    `}
  >
    {filenames.map((filename, index) => {
      return (
        <div
          key={index}
          css={css`
            color: #ccc;
          `}
        >
          <FileNode filename={filename} />
        </div>
      );
    })}
  </div>
);

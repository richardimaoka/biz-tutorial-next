/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FileNameTab } from "./FileNameTab";
import { File } from "./File";
interface FileNameTabBarProps {
  files: File[];
  selectFileIndex: number;
}

export const FileNameTabBar = ({
  files,
  selectFileIndex,
}: FileNameTabBarProps): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
      `}
    >
      {files.map((file, index) => (
        <FileNameTab
          key={index}
          filename={files[index].filename}
          fileIndex={index}
          selectedFileIndex={selectFileIndex}
        />
      ))}
    </div>
  );
};

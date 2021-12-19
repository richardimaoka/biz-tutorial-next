/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface FileNameTabProps {
  filename: string;
  fileIndex: number;
  selectedFileIndex: number;
}

export const FileNameTab = ({
  filename,
  fileIndex,
  selectedFileIndex,
}: FileNameTabProps): JSX.Element => {
  const isThisFileSelected = fileIndex === selectedFileIndex;
  if (isThisFileSelected) {
    console.log(`${filename} is selected`);
  }

  return (
    <div
      css={css`
        display: flex;
      `}
      onClick={() => {
        //Somehow update the selectFileIndex, possibly via Apollo reactive variable
        //https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/#storing-local-state-in-reactive-variables
      }}
    >
      <div
        css={css`
          border-top-right-radius: 8px;
          border-bottom: solid ${isThisFileSelected ? 2 : 0}px #2d2d2d;
          padding-top: 4px;
          padding-bottom: 6px;
          padding-right: 8px;
          padding-left: 8px;
          background-color: #2d2d2d;
          color: #ccc;
        `}
      >
        {filename}
      </div>
    </div>
  );
};

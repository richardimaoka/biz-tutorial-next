/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const FileIcon = (): JSX.Element => {
  return (
    <div>
      <svg
        width="24px"
        height="24px"
        css={css`
          fill: rgb(83, 100, 113);
        `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
      >
        <g>
          <g>
            <path d="M9.43,1.5a4,4,0,0,0-4,4V34.54a4,4,0,0,0,4,4H30.57a4,4,0,0,0,4-4V9.43a1.33,1.33,0,0,0-.39-.94l-6.61-6.6a1.31,1.31,0,0,0-.93-.39Zm0,2.64H24v4a4,4,0,0,0,4,4h4V34.54a1.29,1.29,0,0,1-1.32,1.32H9.43a1.29,1.29,0,0,1-1.32-1.32V5.46A1.29,1.29,0,0,1,9.43,4.14Zm17.18.55,4.74,4.74H27.93a1.29,1.29,0,0,1-1.32-1.32Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

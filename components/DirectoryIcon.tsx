/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const DirectoryIcon = (): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        css={css`
          fill: rgb(83, 100, 113);
        `}
        viewBox="0 0 40 40"
      >
        <g>
          <g>
            <path d="M5.25,3.91a4,4,0,0,0-4,4V32.07a4,4,0,0,0,4,4h29.5a4,4,0,0,0,4-4V13.29a4,4,0,0,0-4-4H20.65L17.72,5.56a4,4,0,0,0-3.08-1.65Zm0,2.68h9.39c.29,0,.61.18,1,.64L19,11.44A1.31,1.31,0,0,0,20,12H34.75a1.32,1.32,0,0,1,1.34,1.34V32.07a1.3,1.3,0,0,1-1.34,1.34H5.25a1.3,1.3,0,0,1-1.34-1.34V7.93A1.3,1.3,0,0,1,5.25,6.59Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

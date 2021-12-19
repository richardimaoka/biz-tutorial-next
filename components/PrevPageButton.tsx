/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PrevPageButton = (): JSX.Element => (
  <div
    css={css`
      width: 60px;
      height: 60px;
      background-color: rgb(29, 161, 242);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      height="40px"
      width="40px"
      css={css`
        fill: white;
      `}
    >
      <path d="M24.94.64a4.8,4.8,0,0,1,3.48,8.11L17.69,20,28.41,31.24a4.8,4.8,0,1,1-6.93,6.64L7.59,23.36a4.8,4.8,0,0,1,0-6.62L21.46,2.13A4.8,4.8,0,0,1,24.94.64Z" />
    </svg>
  </div>
);

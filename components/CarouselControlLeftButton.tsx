/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CarouselControlLeftButton = (): JSX.Element => (
  <div
    css={css`
      width: 30px;
      height: 30px;
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 40 40"
      css={css`
        fill: rgb(255, 255, 255);
      `}
    >
      <polygon points="2.23 20.09 19.11 10.34 36 0.59 36 20.09 36 39.59 19.11 29.84 2.23 20.09" />
    </svg>
  </div>
);

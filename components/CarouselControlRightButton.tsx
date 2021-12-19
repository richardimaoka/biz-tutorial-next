/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CarouselControlRightButton = (): JSX.Element => (
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
      <polygon points="38.28 20.09 21.39 29.84 4.51 39.59 4.51 20.09 4.51 0.59 21.39 10.34 38.28 20.09" />
    </svg>
  </div>
);

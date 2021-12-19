/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CarouselControlLeftButton } from "./CarouselControlLeftButton";
import { CarouselControlRightButton } from "./CarouselControlRightButton";

export const CarouselControlBar = (): JSX.Element => (
  <div
    css={css`
      background-color: #414141;
      height: 30px;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 8px;
      padding-right: 8px;
      display: flex;
      justify-content: space-between;
    `}
  >
    <CarouselControlLeftButton />
    <CarouselControlRightButton />
  </div>
);

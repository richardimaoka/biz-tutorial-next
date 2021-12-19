/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps): JSX.Element => (
  <div
    css={css`
      padding: 4px;
    `}
  >
    <h2
      css={css`
        margin-top: 0px;
        margin-bottom: 0px;
        color: #0a0a0a;
      `}
    >
      {title}
    </h2>
  </div>
);

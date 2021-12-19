/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { ProgressBarFragment } from "./generated/graphql";

export interface ProgressBarProps {
  fragment: ProgressBarFragment;
}

export const ProgressBar = ({ fragment }: ProgressBarProps): JSX.Element => {
  if (!fragment.currentPageNum || !fragment.numPages) {
    return <div />;
  } else {
    const arraySizeOfNumPages = new Array(fragment.numPages).fill("");
    return (
      <div
        css={css`
          display: flex;

          div:first-of-type {
            margin-left: 0px;
          }
          div:last-of-type {
            margin-right: 0px;
          }
          div:nth-of-type(${fragment.currentPageNum}) {
            background-color: #3edf33;
          }
        `}
      >
        {arraySizeOfNumPages.map((_, index) => (
          <div
            key={index}
            css={css`
              flex-grow: 1;
              height: 20px;
              background-color: #dfdfdf;
              margin-left: 5px;
              margin-right: 5px;
            `}
          ></div>
        ))}
      </div>
    );
  }
};

ProgressBar.fragments = gql`
  fragment ProgressBar on Progress {
    currentPageNum
    numPages
  }
`;

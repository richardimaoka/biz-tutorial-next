/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { PageTransitionComponentFragment } from "./generated/graphql";
import { NextPageButton } from "./NextPageButton";
import { PrevPageButton } from "./PrevPageButton";

export interface PageTransitionComponentProps {
  fragment: PageTransitionComponentFragment;
}

export const PageTransitionComponent = ({
  fragment,
}: PageTransitionComponentProps): JSX.Element => {
  return fragment.prevPageNum || fragment.nextPageNum ? (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {fragment.prevPageNum ? (
        <Link to={"/" + fragment.prevPageNum}>
          <PrevPageButton />
        </Link>
      ) : (
        <div />
      )}
      {fragment.nextPageNum ? (
        <Link to={"/" + fragment.nextPageNum}>
          <NextPageButton />
        </Link>
      ) : (
        <div />
      )}
    </div>
  ) : (
    <></>
  );
};

PageTransitionComponent.fragments = gql`
  fragment PageTransitionComponent on Page {
    nextPageNum
    prevPageNum
  }
`;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageComponent } from "./PageComponent";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetPageQuery } from "./generated/graphql";

//This is read by GraphQL codegen to generate types
gql`
  query GetPage($tutorialId: String!, $currentPageNum: String!) {
    tutorial(id: $tutorialId, currentPageNum: $currentPageNum) {
      currentPage {
        ...PageComponent
      }
    }
  }

  ${PageComponent.fragments}
`;

const InnerComponent = ({ pageNum }: { pageNum: string }) => {
  const { loading, error, data } = useGetPageQuery({
    variables: { tutorialId: "wsl", currentPageNum: pageNum },
  });

  if (loading) {
    return <div>{"Loading..."}</div>;
  } else if (error) {
    return <div>{`Error! ${error.message}`}</div>;
  } else if (!data) {
    return <div>{`Error! returned data is undefined or null`}</div>;
  } else if (!data.tutorial) {
    return <div>{`Error! returned data.tutorial is undefined or null`}</div>;
  } else {
    return (
      <main>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 768px;
              border: solid 1px #f9f9f9;
            `}
          >
            {data.tutorial.currentPage ? (
              <PageComponent fragment={data.tutorial.currentPage} />
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    );
  }
};

export const MainContainer = (): JSX.Element => {
  const params = useParams<"pageNum">();
  return params.pageNum ? (
    <InnerComponent pageNum={params.pageNum} />
  ) : (
    <div>invalid page no</div>
  );
};

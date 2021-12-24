/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { useGetTutorialPageQuery } from "../lib/generated/graphql";
import { HeaderContainer } from "./HeaderContainer";
import { PageComponent } from "./PageComponent";

// This is read by GraphQL codegen to generate types
gql`
  query GetTutorialPage($authorId: String!, $tutorialId: String!) {
    tutorial(authorId: $authorId, tutorialId: $tutorialId) {
      ...HeaderContainer
      pages {
        ...PageComponent
      }
    }
    ${HeaderContainer.fragments}
    ${PageComponent.fragments}
  }
`;

export interface PageQueryComponentProps {
  authorId: string;
  tutorialId: string;
  pageNum: string;
}

export const PageQueryComponent = ({
  authorId,
  tutorialId,
  pageNum,
}: PageQueryComponentProps): JSX.Element => {
  const { loading, error, data } = useGetTutorialPageQuery({
    variables: {
      authorId,
      tutorialId,
    },
  });
  if (loading) {
    return <div>{"Loading..."}</div>;
  } else if (error) {
    return <div>{`GraphQL Error! ${error.message}`}</div>;
  } else if (!data) {
    return <div>{`GraphQL Error! returned data is undefined or null`}</div>;
  } else if (!data.tutorial) {
    return (
      <div>{`GraphQL Error! returned data.tutorial is undefined or null`}</div>
    );
  } else if (data && data.tutorial && data.tutorial.pages) {
    const page = data.tutorial.pages.find((x) => x && x.pageNum === pageNum);
    if (page) {
      return (
        <>
          <HeaderContainer fragment={data.tutorial} />
          <PageComponent fragment={page} />
        </>
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
};

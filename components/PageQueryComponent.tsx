/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { useGetTutorialPageQuery } from "../lib/generated/graphql";
import { PageComponent } from "./PageComponent";

// This is read by GraphQL codegen to generate types
gql`
  query GetTutorialPage($authorId: String!, $tutorialId: String!) {
    tutorial(authorId: $authorId, tutorialId: $tutorialId) {
      pages {
        ...PageComponent
      }
    }
    ${PageComponent.fragments}
  }
`;

export interface PageQueryComponentProps {
  authorId: string;
  tutorialId: string;
  pageId: number;
}

export const PageQueryComponent = ({
  authorId,
  tutorialId,
  pageId,
}: PageQueryComponentProps) => {
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
    const aa = data.tutorial.pages[pageId];
    if (aa) {
      return (
        <>
          <PageComponent fragment={aa} />
        </>
      );
    } else {
      return <></>;
    }
  }
};

import { gql } from "@apollo/client";
import { useGetTutorialQuery } from "../lib/generated/graphql";

// This is read by GraphQL codegen to generate types
gql`
  query GetTutorial($authorId: String!, $tutorialId: String!) {
    tutorial(authorId: $authorId, tutorialId: $tutorialId) {
      __typename
    }
  }
`;

export interface TutorialComponentProps {
  authorId: string;
  tutorialId: string;
}

export const TutorialComponent = ({
  authorId,
  tutorialId,
}: TutorialComponentProps): JSX.Element => {
  const { loading, error, data } = useGetTutorialQuery({
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
  } else {
    return (
      <>
        <div>aaaaaaa tutorial</div>
      </>
    );
  }
};

import { gql } from "@apollo/client";

//This is read by GraphQL codegen to generate types
gql`
  query GetTutorial {
    tutorial(id: "wsl") {
      __typename
    }
  }
`;

export const TutorialComponent = (): JSX.Element => {
  const { loading, error, data } = useGetTutorialQuery();

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
      <>
        <div>aaaaaaa tutorial</div>
      </>
    );
  }
};

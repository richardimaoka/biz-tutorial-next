import { gql } from "@apollo/client";
import { Outlet } from "react-router";
import { useGetTutorialQuery } from "./generated/graphql";
import { HeaderContainer } from "./HeaderContainer";

//This is read by GraphQL codegen to generate types
gql`
  query GetTutorial {
    tutorial (id: "wsl"){
      ...HeaderContainer
    }
    ${HeaderContainer.fragments}
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
        <HeaderContainer fragment={data.tutorial}></HeaderContainer>
        <Outlet />
      </>
    );
  }
};

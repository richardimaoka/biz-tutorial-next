import { gql } from "@apollo/client";

export const nonused = (): JSX.Element => {
  return <></>;
};

nonused.fragment = gql`
  fragment nonused on TextChunk {
    text
  }
`;

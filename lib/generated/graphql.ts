import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Action = {
  __typename?: "Action";
  paragraph: Maybe<Paragraph>;
};

export type Command = {
  __typename?: "Command";
  command: Maybe<Scalars["String"]>;
};

export type CommandAndOutput = {
  __typename?: "CommandAndOutput";
  command: Maybe<Scalars["String"]>;
  output: Maybe<Scalars["String"]>;
};

export type DirectoryStructure = {
  __typename?: "DirectoryStructure";
  contents: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type Foldable = {
  __typename?: "Foldable";
  elements: Maybe<Array<Maybe<PlainElement>>>;
  shortDescription: Maybe<Scalars["String"]>;
};

export type Image = {
  __typename?: "Image";
  caption: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
};

export type ImageGroup = {
  __typename?: "ImageGroup";
  images: Maybe<Array<Maybe<Image>>>;
};

export type Note = {
  __typename?: "Note";
  body: Maybe<Scalars["String"]>;
};

export type Output = {
  __typename?: "Output";
  body: Maybe<Scalars["String"]>;
};

export type Page = {
  __typename?: "Page";
  id: Maybe<Scalars["ID"]>;
  nextPageNum: Maybe<Scalars["String"]>;
  pageElements: Maybe<Array<Maybe<PageElement>>>;
  pageNum: Maybe<Scalars["String"]>;
  prevPageNum: Maybe<Scalars["String"]>;
  progress: Maybe<Progress>;
  title: Maybe<Scalars["String"]>;
};

export type PageElement =
  | Action
  | Command
  | Foldable
  | Image
  | ImageGroup
  | Output
  | Paragraph
  | Video;

export type Paragraph = {
  __typename?: "Paragraph";
  chunks: Maybe<Array<Maybe<TextChunk>>>;
};

export type PlainElement =
  | Action
  | Command
  | Image
  | ImageGroup
  | Output
  | Paragraph
  | Video;

export type Progress = {
  __typename?: "Progress";
  currentPageNum: Maybe<Scalars["Int"]>;
  numPages: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  tutorial: Maybe<Tutorial>;
};

export type QueryTutorialArgs = {
  currentPageNum: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type TextChunk = {
  __typename?: "TextChunk";
  bold: Maybe<Scalars["Boolean"]>;
  highlight: Maybe<Scalars["Boolean"]>;
  hyperlinkUrl: Maybe<Scalars["String"]>;
  inlineCode: Maybe<Scalars["Boolean"]>;
  strikeout: Maybe<Scalars["Boolean"]>;
  text: Maybe<Scalars["String"]>;
};

export type Tutorial = {
  __typename?: "Tutorial";
  currentPage: Maybe<Page>;
  id: Maybe<Scalars["ID"]>;
  pages: Maybe<Array<Maybe<Page>>>;
  title: Maybe<Scalars["String"]>;
};

export type Video = {
  __typename?: "Video";
  caption: Maybe<Scalars["String"]>;
  platform: Maybe<VideoPlatform>;
  url: Maybe<Scalars["String"]>;
};

export enum VideoPlatform {
  Vimeo = "VIMEO",
  Youtube = "YOUTUBE",
}

export type GetTutorialQueryVariables = Exact<{ [key: string]: never }>;

export type GetTutorialQuery = {
  __typename?: "Query";
  tutorial: { __typename: "Tutorial" } | null | undefined;
};

export const GetTutorialDocument = gql`
  query GetTutorial {
    tutorial(id: "wsl") {
      __typename
    }
  }
`;

/**
 * __useGetTutorialQuery__
 *
 * To run a query within a React component, call `useGetTutorialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTutorialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTutorialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTutorialQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTutorialQuery,
    GetTutorialQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTutorialQuery, GetTutorialQueryVariables>(
    GetTutorialDocument,
    options
  );
}
export function useGetTutorialLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTutorialQuery,
    GetTutorialQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTutorialQuery, GetTutorialQueryVariables>(
    GetTutorialDocument,
    options
  );
}
export type GetTutorialQueryHookResult = ReturnType<typeof useGetTutorialQuery>;
export type GetTutorialLazyQueryHookResult = ReturnType<
  typeof useGetTutorialLazyQuery
>;
export type GetTutorialQueryResult = Apollo.QueryResult<
  GetTutorialQuery,
  GetTutorialQueryVariables
>;

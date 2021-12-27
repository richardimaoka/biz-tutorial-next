import { GraphQLResolveInfo } from "graphql";
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
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

export type Author = {
  __typename?: "Author";
  id: Maybe<Scalars["ID"]>;
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

export type DecorateTextChunksInput = {
  __typename?: "DecorateTextChunksInput";
  chunks: Array<Maybe<TextChunkWithOperation>>;
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
  authorId: Scalars["String"];
  tutorialId: Scalars["String"];
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

export type TextChunkModifyOperation = {
  __typename?: "TextChunkModifyOperation";
  bold: Maybe<Scalars["Boolean"]>;
  highlight: Maybe<Scalars["Boolean"]>;
  hyperlinkUrl: Maybe<Scalars["String"]>;
  strikeout: Maybe<Scalars["Boolean"]>;
  text: Maybe<Scalars["String"]>;
};

export type TextChunkOperation =
  | TextChunkModifyOperation
  | TextChunkSplitOperation;

export type TextChunkSplitOperation = {
  __typename?: "TextChunkSplitOperation";
  splitAt: Scalars["Int"];
  splitFirstHalfOperation: Maybe<TextChunkModifyOperation>;
  splitSecondHalfOperation: Maybe<TextChunkModifyOperation>;
};

export type TextChunkWithOperation = {
  __typename?: "TextChunkWithOperation";
  chunk: TextChunk;
  operation: Maybe<TextChunkOperation>;
};

export type Tutorial = {
  __typename?: "Tutorial";
  author: Maybe<Author>;
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

export type CarouselComponentFragment = {
  __typename?: "ImageGroup";
  images:
    | Array<
        | { __typename?: "Image"; url: string | null | undefined }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type CarouselContentFragment = {
  __typename?: "ImageGroup";
  images:
    | Array<
        | { __typename?: "Image"; url: string | null | undefined }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type CarouselImageFragment = {
  __typename?: "Image";
  url: string | null | undefined;
};

export type CarouselItemFragment = {
  __typename?: "Image";
  url: string | null | undefined;
};

export type CommandComponentFragment = {
  __typename?: "Command";
  command: string | null | undefined;
};

export type FoldableComponentFragment = {
  __typename?: "Foldable";
  shortDescription: string | null | undefined;
  elements:
    | Array<
        | {
            __typename?: "Action";
            paragraph:
              | {
                  __typename?: "Paragraph";
                  chunks:
                    | Array<
                        | {
                            __typename?: "TextChunk";
                            text: string | null | undefined;
                            highlight: boolean | null | undefined;
                            bold: boolean | null | undefined;
                            hyperlinkUrl: string | null | undefined;
                            strikeout: boolean | null | undefined;
                            inlineCode: boolean | null | undefined;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | { __typename?: "Command" }
        | {
            __typename?: "Image";
            url: string | null | undefined;
            caption: string | null | undefined;
          }
        | {
            __typename?: "ImageGroup";
            images:
              | Array<
                  | {
                      __typename?: "Image";
                      url: string | null | undefined;
                      caption: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | { __typename?: "Output" }
        | {
            __typename?: "Paragraph";
            chunks:
              | Array<
                  | {
                      __typename?: "TextChunk";
                      text: string | null | undefined;
                      highlight: boolean | null | undefined;
                      bold: boolean | null | undefined;
                      hyperlinkUrl: string | null | undefined;
                      strikeout: boolean | null | undefined;
                      inlineCode: boolean | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | {
            __typename?: "Video";
            platform: VideoPlatform | null | undefined;
            url: string | null | undefined;
            caption: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type HeaderContainerFragment = {
  __typename?: "Tutorial";
  title: string | null | undefined;
};

export type ImageComponentFragment = {
  __typename?: "Image";
  url: string | null | undefined;
  caption: string | null | undefined;
};

export type ImageGroupComponentFragment = {
  __typename?: "ImageGroup";
  images:
    | Array<
        | {
            __typename?: "Image";
            url: string | null | undefined;
            caption: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type OutputComponentFragment = {
  __typename?: "Output";
  body: string | null | undefined;
};

export type PageComponentFragment = {
  __typename?: "Page";
  title: string | null | undefined;
  pageNum: string | null | undefined;
  progress:
    | {
        __typename?: "Progress";
        currentPageNum: number | null | undefined;
        numPages: number | null | undefined;
      }
    | null
    | undefined;
  pageElements:
    | Array<
        | {
            __typename?: "Action";
            paragraph:
              | {
                  __typename?: "Paragraph";
                  chunks:
                    | Array<
                        | {
                            __typename?: "TextChunk";
                            text: string | null | undefined;
                            highlight: boolean | null | undefined;
                            bold: boolean | null | undefined;
                            hyperlinkUrl: string | null | undefined;
                            strikeout: boolean | null | undefined;
                            inlineCode: boolean | null | undefined;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | { __typename?: "Command"; command: string | null | undefined }
        | {
            __typename?: "Foldable";
            shortDescription: string | null | undefined;
            elements:
              | Array<
                  | {
                      __typename?: "Action";
                      paragraph:
                        | {
                            __typename?: "Paragraph";
                            chunks:
                              | Array<
                                  | {
                                      __typename?: "TextChunk";
                                      text: string | null | undefined;
                                      highlight: boolean | null | undefined;
                                      bold: boolean | null | undefined;
                                      hyperlinkUrl: string | null | undefined;
                                      strikeout: boolean | null | undefined;
                                      inlineCode: boolean | null | undefined;
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | { __typename?: "Command" }
                  | {
                      __typename?: "Image";
                      url: string | null | undefined;
                      caption: string | null | undefined;
                    }
                  | {
                      __typename?: "ImageGroup";
                      images:
                        | Array<
                            | {
                                __typename?: "Image";
                                url: string | null | undefined;
                                caption: string | null | undefined;
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined;
                    }
                  | { __typename?: "Output" }
                  | {
                      __typename?: "Paragraph";
                      chunks:
                        | Array<
                            | {
                                __typename?: "TextChunk";
                                text: string | null | undefined;
                                highlight: boolean | null | undefined;
                                bold: boolean | null | undefined;
                                hyperlinkUrl: string | null | undefined;
                                strikeout: boolean | null | undefined;
                                inlineCode: boolean | null | undefined;
                              }
                            | null
                            | undefined
                          >
                        | null
                        | undefined;
                    }
                  | {
                      __typename?: "Video";
                      platform: VideoPlatform | null | undefined;
                      url: string | null | undefined;
                      caption: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | {
            __typename?: "Image";
            url: string | null | undefined;
            caption: string | null | undefined;
          }
        | {
            __typename?: "ImageGroup";
            images:
              | Array<
                  | {
                      __typename?: "Image";
                      url: string | null | undefined;
                      caption: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | { __typename?: "Output"; body: string | null | undefined }
        | {
            __typename?: "Paragraph";
            chunks:
              | Array<
                  | {
                      __typename?: "TextChunk";
                      text: string | null | undefined;
                      highlight: boolean | null | undefined;
                      bold: boolean | null | undefined;
                      hyperlinkUrl: string | null | undefined;
                      strikeout: boolean | null | undefined;
                      inlineCode: boolean | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | {
            __typename?: "Video";
            platform: VideoPlatform | null | undefined;
            url: string | null | undefined;
            caption: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type GetTutorialPageQueryVariables = Exact<{
  authorId: Scalars["String"];
  tutorialId: Scalars["String"];
}>;

export type GetTutorialPageQuery = {
  __typename?: "Query";
  tutorial:
    | {
        __typename?: "Tutorial";
        title: string | null | undefined;
        pages:
          | Array<
              | {
                  __typename?: "Page";
                  title: string | null | undefined;
                  pageNum: string | null | undefined;
                  progress:
                    | {
                        __typename?: "Progress";
                        currentPageNum: number | null | undefined;
                        numPages: number | null | undefined;
                      }
                    | null
                    | undefined;
                  pageElements:
                    | Array<
                        | {
                            __typename?: "Action";
                            paragraph:
                              | {
                                  __typename?: "Paragraph";
                                  chunks:
                                    | Array<
                                        | {
                                            __typename?: "TextChunk";
                                            text: string | null | undefined;
                                            highlight:
                                              | boolean
                                              | null
                                              | undefined;
                                            bold: boolean | null | undefined;
                                            hyperlinkUrl:
                                              | string
                                              | null
                                              | undefined;
                                            strikeout:
                                              | boolean
                                              | null
                                              | undefined;
                                            inlineCode:
                                              | boolean
                                              | null
                                              | undefined;
                                          }
                                        | null
                                        | undefined
                                      >
                                    | null
                                    | undefined;
                                }
                              | null
                              | undefined;
                          }
                        | {
                            __typename?: "Command";
                            command: string | null | undefined;
                          }
                        | {
                            __typename?: "Foldable";
                            shortDescription: string | null | undefined;
                            elements:
                              | Array<
                                  | {
                                      __typename?: "Action";
                                      paragraph:
                                        | {
                                            __typename?: "Paragraph";
                                            chunks:
                                              | Array<
                                                  | {
                                                      __typename?: "TextChunk";
                                                      text:
                                                        | string
                                                        | null
                                                        | undefined;
                                                      highlight:
                                                        | boolean
                                                        | null
                                                        | undefined;
                                                      bold:
                                                        | boolean
                                                        | null
                                                        | undefined;
                                                      hyperlinkUrl:
                                                        | string
                                                        | null
                                                        | undefined;
                                                      strikeout:
                                                        | boolean
                                                        | null
                                                        | undefined;
                                                      inlineCode:
                                                        | boolean
                                                        | null
                                                        | undefined;
                                                    }
                                                  | null
                                                  | undefined
                                                >
                                              | null
                                              | undefined;
                                          }
                                        | null
                                        | undefined;
                                    }
                                  | { __typename?: "Command" }
                                  | {
                                      __typename?: "Image";
                                      url: string | null | undefined;
                                      caption: string | null | undefined;
                                    }
                                  | {
                                      __typename?: "ImageGroup";
                                      images:
                                        | Array<
                                            | {
                                                __typename?: "Image";
                                                url: string | null | undefined;
                                                caption:
                                                  | string
                                                  | null
                                                  | undefined;
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined;
                                    }
                                  | { __typename?: "Output" }
                                  | {
                                      __typename?: "Paragraph";
                                      chunks:
                                        | Array<
                                            | {
                                                __typename?: "TextChunk";
                                                text: string | null | undefined;
                                                highlight:
                                                  | boolean
                                                  | null
                                                  | undefined;
                                                bold:
                                                  | boolean
                                                  | null
                                                  | undefined;
                                                hyperlinkUrl:
                                                  | string
                                                  | null
                                                  | undefined;
                                                strikeout:
                                                  | boolean
                                                  | null
                                                  | undefined;
                                                inlineCode:
                                                  | boolean
                                                  | null
                                                  | undefined;
                                              }
                                            | null
                                            | undefined
                                          >
                                        | null
                                        | undefined;
                                    }
                                  | {
                                      __typename?: "Video";
                                      platform:
                                        | VideoPlatform
                                        | null
                                        | undefined;
                                      url: string | null | undefined;
                                      caption: string | null | undefined;
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                          }
                        | {
                            __typename?: "Image";
                            url: string | null | undefined;
                            caption: string | null | undefined;
                          }
                        | {
                            __typename?: "ImageGroup";
                            images:
                              | Array<
                                  | {
                                      __typename?: "Image";
                                      url: string | null | undefined;
                                      caption: string | null | undefined;
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                          }
                        | {
                            __typename?: "Output";
                            body: string | null | undefined;
                          }
                        | {
                            __typename?: "Paragraph";
                            chunks:
                              | Array<
                                  | {
                                      __typename?: "TextChunk";
                                      text: string | null | undefined;
                                      highlight: boolean | null | undefined;
                                      bold: boolean | null | undefined;
                                      hyperlinkUrl: string | null | undefined;
                                      strikeout: boolean | null | undefined;
                                      inlineCode: boolean | null | undefined;
                                    }
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                          }
                        | {
                            __typename?: "Video";
                            platform: VideoPlatform | null | undefined;
                            url: string | null | undefined;
                            caption: string | null | undefined;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ProgressBarFragment = {
  __typename?: "Progress";
  currentPageNum: number | null | undefined;
  numPages: number | null | undefined;
};

export type GetTutorialQueryVariables = Exact<{
  authorId: Scalars["String"];
  tutorialId: Scalars["String"];
}>;

export type GetTutorialQuery = {
  __typename?: "Query";
  tutorial: { __typename: "Tutorial" } | null | undefined;
};

export type VideoComponentFragment = {
  __typename?: "Video";
  platform: VideoPlatform | null | undefined;
  url: string | null | undefined;
  caption: string | null | undefined;
};

export type ActionComponentFragment = {
  __typename?: "Action";
  paragraph:
    | {
        __typename?: "Paragraph";
        chunks:
          | Array<
              | {
                  __typename?: "TextChunk";
                  text: string | null | undefined;
                  highlight: boolean | null | undefined;
                  bold: boolean | null | undefined;
                  hyperlinkUrl: string | null | undefined;
                  strikeout: boolean | null | undefined;
                  inlineCode: boolean | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ParagraphComponentFragment = {
  __typename?: "Paragraph";
  chunks:
    | Array<
        | {
            __typename?: "TextChunk";
            text: string | null | undefined;
            highlight: boolean | null | undefined;
            bold: boolean | null | undefined;
            hyperlinkUrl: string | null | undefined;
            strikeout: boolean | null | undefined;
            inlineCode: boolean | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type TextChunkComponentFragment = {
  __typename?: "TextChunk";
  text: string | null | undefined;
  highlight: boolean | null | undefined;
  bold: boolean | null | undefined;
  hyperlinkUrl: string | null | undefined;
  strikeout: boolean | null | undefined;
  inlineCode: boolean | null | undefined;
};

export const CarouselImageFragmentDoc = gql`
  fragment CarouselImage on Image {
    url
  }
`;
export const CarouselItemFragmentDoc = gql`
  fragment CarouselItem on Image {
    ...CarouselImage
  }
  ${CarouselImageFragmentDoc}
`;
export const CarouselContentFragmentDoc = gql`
  fragment CarouselContent on ImageGroup {
    images {
      ...CarouselItem
    }
  }
  ${CarouselItemFragmentDoc}
`;
export const CarouselComponentFragmentDoc = gql`
  fragment CarouselComponent on ImageGroup {
    ...CarouselContent
  }
  ${CarouselContentFragmentDoc}
`;
export const HeaderContainerFragmentDoc = gql`
  fragment HeaderContainer on Tutorial {
    title
  }
`;
export const ProgressBarFragmentDoc = gql`
  fragment ProgressBar on Progress {
    currentPageNum
    numPages
  }
`;
export const VideoComponentFragmentDoc = gql`
  fragment VideoComponent on Video {
    platform
    url
    caption
  }
`;
export const TextChunkComponentFragmentDoc = gql`
  fragment TextChunkComponent on TextChunk {
    text
    highlight
    bold
    hyperlinkUrl
    strikeout
    inlineCode
  }
`;
export const ParagraphComponentFragmentDoc = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }
  ${TextChunkComponentFragmentDoc}
`;
export const ImageComponentFragmentDoc = gql`
  fragment ImageComponent on Image {
    url
    caption
  }
`;
export const ImageGroupComponentFragmentDoc = gql`
  fragment ImageGroupComponent on ImageGroup {
    images {
      ...ImageComponent
    }
  }
  ${ImageComponentFragmentDoc}
`;
export const ActionComponentFragmentDoc = gql`
  fragment ActionComponent on Action {
    paragraph {
      ...ParagraphComponent
    }
  }
  ${ParagraphComponentFragmentDoc}
`;
export const FoldableComponentFragmentDoc = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Image {
        ...ImageComponent
      }
      ... on Action {
        ...ActionComponent
      }
    }
  }
  ${VideoComponentFragmentDoc}
  ${ParagraphComponentFragmentDoc}
  ${ImageGroupComponentFragmentDoc}
  ${ImageComponentFragmentDoc}
  ${ActionComponentFragmentDoc}
`;
export const CommandComponentFragmentDoc = gql`
  fragment CommandComponent on Command {
    command
  }
`;
export const OutputComponentFragmentDoc = gql`
  fragment OutputComponent on Output {
    body
  }
`;
export const PageComponentFragmentDoc = gql`
  fragment PageComponent on Page {
    title
    pageNum
    progress {
      ...ProgressBar
    }
    pageElements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Foldable {
        ...FoldableComponent
      }
      ... on Action {
        ...ActionComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on Output {
        ...OutputComponent
      }
      ... on Image {
        ...ImageComponent
      }
    }
  }
  ${ProgressBarFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${ParagraphComponentFragmentDoc}
  ${ImageGroupComponentFragmentDoc}
  ${FoldableComponentFragmentDoc}
  ${ActionComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${OutputComponentFragmentDoc}
  ${ImageComponentFragmentDoc}
`;
export const GetTutorialPageDocument = gql`
  query GetTutorialPage($authorId: String!, $tutorialId: String!) {
    tutorial(authorId: $authorId, tutorialId: $tutorialId) {
      ...HeaderContainer
      pages {
        ...PageComponent
      }
    }
  }
  ${HeaderContainerFragmentDoc}
  ${PageComponentFragmentDoc}
`;

/**
 * __useGetTutorialPageQuery__
 *
 * To run a query within a React component, call `useGetTutorialPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTutorialPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTutorialPageQuery({
 *   variables: {
 *      authorId: // value for 'authorId'
 *      tutorialId: // value for 'tutorialId'
 *   },
 * });
 */
export function useGetTutorialPageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTutorialPageQuery,
    GetTutorialPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTutorialPageQuery, GetTutorialPageQueryVariables>(
    GetTutorialPageDocument,
    options
  );
}
export function useGetTutorialPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTutorialPageQuery,
    GetTutorialPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTutorialPageQuery,
    GetTutorialPageQueryVariables
  >(GetTutorialPageDocument, options);
}
export type GetTutorialPageQueryHookResult = ReturnType<
  typeof useGetTutorialPageQuery
>;
export type GetTutorialPageLazyQueryHookResult = ReturnType<
  typeof useGetTutorialPageLazyQuery
>;
export type GetTutorialPageQueryResult = Apollo.QueryResult<
  GetTutorialPageQuery,
  GetTutorialPageQueryVariables
>;
export const GetTutorialDocument = gql`
  query GetTutorial($authorId: String!, $tutorialId: String!) {
    tutorial(authorId: $authorId, tutorialId: $tutorialId) {
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
 *      authorId: // value for 'authorId'
 *      tutorialId: // value for 'tutorialId'
 *   },
 * });
 */
export function useGetTutorialQuery(
  baseOptions: Apollo.QueryHookOptions<
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
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Action: ResolverTypeWrapper<Action>;
  Author: ResolverTypeWrapper<Author>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Command: ResolverTypeWrapper<Command>;
  CommandAndOutput: ResolverTypeWrapper<CommandAndOutput>;
  DecorateTextChunksInput: ResolverTypeWrapper<DecorateTextChunksInput>;
  DirectoryStructure: ResolverTypeWrapper<DirectoryStructure>;
  Foldable: ResolverTypeWrapper<
    Omit<Foldable, "elements"> & {
      elements: Maybe<Array<Maybe<ResolversTypes["PlainElement"]>>>;
    }
  >;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Image: ResolverTypeWrapper<Image>;
  ImageGroup: ResolverTypeWrapper<ImageGroup>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Note: ResolverTypeWrapper<Note>;
  Output: ResolverTypeWrapper<Output>;
  Page: ResolverTypeWrapper<
    Omit<Page, "pageElements"> & {
      pageElements: Maybe<Array<Maybe<ResolversTypes["PageElement"]>>>;
    }
  >;
  PageElement:
    | ResolversTypes["Action"]
    | ResolversTypes["Command"]
    | ResolversTypes["Foldable"]
    | ResolversTypes["Image"]
    | ResolversTypes["ImageGroup"]
    | ResolversTypes["Output"]
    | ResolversTypes["Paragraph"]
    | ResolversTypes["Video"];
  Paragraph: ResolverTypeWrapper<Paragraph>;
  PlainElement:
    | ResolversTypes["Action"]
    | ResolversTypes["Command"]
    | ResolversTypes["Image"]
    | ResolversTypes["ImageGroup"]
    | ResolversTypes["Output"]
    | ResolversTypes["Paragraph"]
    | ResolversTypes["Video"];
  Progress: ResolverTypeWrapper<Progress>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  TextChunk: ResolverTypeWrapper<TextChunk>;
  TextChunkModifyOperation: ResolverTypeWrapper<TextChunkModifyOperation>;
  TextChunkOperation:
    | ResolversTypes["TextChunkModifyOperation"]
    | ResolversTypes["TextChunkSplitOperation"];
  TextChunkSplitOperation: ResolverTypeWrapper<TextChunkSplitOperation>;
  TextChunkWithOperation: ResolverTypeWrapper<
    Omit<TextChunkWithOperation, "operation"> & {
      operation: Maybe<ResolversTypes["TextChunkOperation"]>;
    }
  >;
  Tutorial: ResolverTypeWrapper<Tutorial>;
  Video: ResolverTypeWrapper<Video>;
  VideoPlatform: VideoPlatform;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Action: Action;
  Author: Author;
  Boolean: Scalars["Boolean"];
  Command: Command;
  CommandAndOutput: CommandAndOutput;
  DecorateTextChunksInput: DecorateTextChunksInput;
  DirectoryStructure: DirectoryStructure;
  Foldable: Omit<Foldable, "elements"> & {
    elements: Maybe<Array<Maybe<ResolversParentTypes["PlainElement"]>>>;
  };
  ID: Scalars["ID"];
  Image: Image;
  ImageGroup: ImageGroup;
  Int: Scalars["Int"];
  Note: Note;
  Output: Output;
  Page: Omit<Page, "pageElements"> & {
    pageElements: Maybe<Array<Maybe<ResolversParentTypes["PageElement"]>>>;
  };
  PageElement:
    | ResolversParentTypes["Action"]
    | ResolversParentTypes["Command"]
    | ResolversParentTypes["Foldable"]
    | ResolversParentTypes["Image"]
    | ResolversParentTypes["ImageGroup"]
    | ResolversParentTypes["Output"]
    | ResolversParentTypes["Paragraph"]
    | ResolversParentTypes["Video"];
  Paragraph: Paragraph;
  PlainElement:
    | ResolversParentTypes["Action"]
    | ResolversParentTypes["Command"]
    | ResolversParentTypes["Image"]
    | ResolversParentTypes["ImageGroup"]
    | ResolversParentTypes["Output"]
    | ResolversParentTypes["Paragraph"]
    | ResolversParentTypes["Video"];
  Progress: Progress;
  Query: {};
  String: Scalars["String"];
  TextChunk: TextChunk;
  TextChunkModifyOperation: TextChunkModifyOperation;
  TextChunkOperation:
    | ResolversParentTypes["TextChunkModifyOperation"]
    | ResolversParentTypes["TextChunkSplitOperation"];
  TextChunkSplitOperation: TextChunkSplitOperation;
  TextChunkWithOperation: Omit<TextChunkWithOperation, "operation"> & {
    operation: Maybe<ResolversParentTypes["TextChunkOperation"]>;
  };
  Tutorial: Tutorial;
  Video: Video;
}>;

export type ActionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Action"] = ResolversParentTypes["Action"]
> = ResolversObject<{
  paragraph: Resolver<
    Maybe<ResolversTypes["Paragraph"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Author"] = ResolversParentTypes["Author"]
> = ResolversObject<{
  id: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Command"] = ResolversParentTypes["Command"]
> = ResolversObject<{
  command: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommandAndOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommandAndOutput"] = ResolversParentTypes["CommandAndOutput"]
> = ResolversObject<{
  command: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  output: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DecorateTextChunksInputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DecorateTextChunksInput"] = ResolversParentTypes["DecorateTextChunksInput"]
> = ResolversObject<{
  chunks: Resolver<
    Array<Maybe<ResolversTypes["TextChunkWithOperation"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DirectoryStructureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DirectoryStructure"] = ResolversParentTypes["DirectoryStructure"]
> = ResolversObject<{
  contents: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FoldableResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Foldable"] = ResolversParentTypes["Foldable"]
> = ResolversObject<{
  elements: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PlainElement"]>>>,
    ParentType,
    ContextType
  >;
  shortDescription: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Image"] = ResolversParentTypes["Image"]
> = ResolversObject<{
  caption: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ImageGroup"] = ResolversParentTypes["ImageGroup"]
> = ResolversObject<{
  images: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Image"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Note"] = ResolversParentTypes["Note"]
> = ResolversObject<{
  body: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Output"] = ResolversParentTypes["Output"]
> = ResolversObject<{
  body: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Page"] = ResolversParentTypes["Page"]
> = ResolversObject<{
  id: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  nextPageNum: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pageElements: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PageElement"]>>>,
    ParentType,
    ContextType
  >;
  pageNum: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  prevPageNum: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  progress: Resolver<
    Maybe<ResolversTypes["Progress"]>,
    ParentType,
    ContextType
  >;
  title: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageElement"] = ResolversParentTypes["PageElement"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "Action"
    | "Command"
    | "Foldable"
    | "Image"
    | "ImageGroup"
    | "Output"
    | "Paragraph"
    | "Video",
    ParentType,
    ContextType
  >;
}>;

export type ParagraphResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Paragraph"] = ResolversParentTypes["Paragraph"]
> = ResolversObject<{
  chunks: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TextChunk"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlainElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PlainElement"] = ResolversParentTypes["PlainElement"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "Action"
    | "Command"
    | "Image"
    | "ImageGroup"
    | "Output"
    | "Paragraph"
    | "Video",
    ParentType,
    ContextType
  >;
}>;

export type ProgressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Progress"] = ResolversParentTypes["Progress"]
> = ResolversObject<{
  currentPageNum: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  numPages: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  tutorial: Resolver<
    Maybe<ResolversTypes["Tutorial"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTutorialArgs, "authorId" | "tutorialId">
  >;
}>;

export type TextChunkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TextChunk"] = ResolversParentTypes["TextChunk"]
> = ResolversObject<{
  bold: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  highlight: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  hyperlinkUrl: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  inlineCode: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  strikeout: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  text: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextChunkModifyOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TextChunkModifyOperation"] = ResolversParentTypes["TextChunkModifyOperation"]
> = ResolversObject<{
  bold: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  highlight: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  hyperlinkUrl: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  strikeout: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  text: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextChunkOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TextChunkOperation"] = ResolversParentTypes["TextChunkOperation"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "TextChunkModifyOperation" | "TextChunkSplitOperation",
    ParentType,
    ContextType
  >;
}>;

export type TextChunkSplitOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TextChunkSplitOperation"] = ResolversParentTypes["TextChunkSplitOperation"]
> = ResolversObject<{
  splitAt: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  splitFirstHalfOperation: Resolver<
    Maybe<ResolversTypes["TextChunkModifyOperation"]>,
    ParentType,
    ContextType
  >;
  splitSecondHalfOperation: Resolver<
    Maybe<ResolversTypes["TextChunkModifyOperation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextChunkWithOperationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TextChunkWithOperation"] = ResolversParentTypes["TextChunkWithOperation"]
> = ResolversObject<{
  chunk: Resolver<ResolversTypes["TextChunk"], ParentType, ContextType>;
  operation: Resolver<
    Maybe<ResolversTypes["TextChunkOperation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TutorialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Tutorial"] = ResolversParentTypes["Tutorial"]
> = ResolversObject<{
  author: Resolver<Maybe<ResolversTypes["Author"]>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  pages: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Page"]>>>,
    ParentType,
    ContextType
  >;
  title: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VideoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Video"] = ResolversParentTypes["Video"]
> = ResolversObject<{
  caption: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  platform: Resolver<
    Maybe<ResolversTypes["VideoPlatform"]>,
    ParentType,
    ContextType
  >;
  url: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Action: ActionResolvers<ContextType>;
  Author: AuthorResolvers<ContextType>;
  Command: CommandResolvers<ContextType>;
  CommandAndOutput: CommandAndOutputResolvers<ContextType>;
  DecorateTextChunksInput: DecorateTextChunksInputResolvers<ContextType>;
  DirectoryStructure: DirectoryStructureResolvers<ContextType>;
  Foldable: FoldableResolvers<ContextType>;
  Image: ImageResolvers<ContextType>;
  ImageGroup: ImageGroupResolvers<ContextType>;
  Note: NoteResolvers<ContextType>;
  Output: OutputResolvers<ContextType>;
  Page: PageResolvers<ContextType>;
  PageElement: PageElementResolvers<ContextType>;
  Paragraph: ParagraphResolvers<ContextType>;
  PlainElement: PlainElementResolvers<ContextType>;
  Progress: ProgressResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  TextChunk: TextChunkResolvers<ContextType>;
  TextChunkModifyOperation: TextChunkModifyOperationResolvers<ContextType>;
  TextChunkOperation: TextChunkOperationResolvers<ContextType>;
  TextChunkSplitOperation: TextChunkSplitOperationResolvers<ContextType>;
  TextChunkWithOperation: TextChunkWithOperationResolvers<ContextType>;
  Tutorial: TutorialResolvers<ContextType>;
  Video: VideoResolvers<ContextType>;
}>;

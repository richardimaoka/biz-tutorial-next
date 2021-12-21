import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Action = {
  __typename?: 'Action';
  paragraph: Maybe<Paragraph>;
};

export type Author = {
  __typename?: 'Author';
  id: Maybe<Scalars['ID']>;
};

export type Command = {
  __typename?: 'Command';
  command: Maybe<Scalars['String']>;
};

export type CommandAndOutput = {
  __typename?: 'CommandAndOutput';
  command: Maybe<Scalars['String']>;
  output: Maybe<Scalars['String']>;
};

export type DecorateTextChunksInput = {
  __typename?: 'DecorateTextChunksInput';
  chunks: Array<Maybe<TextChunkWithOperation>>;
};

export type DirectoryStructure = {
  __typename?: 'DirectoryStructure';
  contents: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Foldable = {
  __typename?: 'Foldable';
  elements: Maybe<Array<Maybe<PlainElement>>>;
  shortDescription: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  caption: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ImageGroup = {
  __typename?: 'ImageGroup';
  images: Maybe<Array<Maybe<Image>>>;
};

export type Note = {
  __typename?: 'Note';
  body: Maybe<Scalars['String']>;
};

export type Output = {
  __typename?: 'Output';
  body: Maybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  id: Maybe<Scalars['ID']>;
  nextPageNum: Maybe<Scalars['String']>;
  pageElements: Maybe<Array<Maybe<PageElement>>>;
  pageNum: Maybe<Scalars['String']>;
  prevPageNum: Maybe<Scalars['String']>;
  progress: Maybe<Progress>;
  title: Maybe<Scalars['String']>;
};

export type PageElement = Action | Command | Foldable | Image | ImageGroup | Output | Paragraph | Video;

export type Paragraph = {
  __typename?: 'Paragraph';
  chunks: Maybe<Array<Maybe<TextChunk>>>;
};

export type PlainElement = Action | Command | Image | ImageGroup | Output | Paragraph | Video;

export type Progress = {
  __typename?: 'Progress';
  currentPageNum: Maybe<Scalars['Int']>;
  numPages: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  tutorial: Maybe<Tutorial>;
};


export type QueryTutorialArgs = {
  authorId: Scalars['String'];
  tutorialId: Scalars['String'];
};

export type TextChunk = {
  __typename?: 'TextChunk';
  bold: Maybe<Scalars['Boolean']>;
  highlight: Maybe<Scalars['Boolean']>;
  hyperlinkUrl: Maybe<Scalars['String']>;
  inlineCode: Maybe<Scalars['Boolean']>;
  strikeout: Maybe<Scalars['Boolean']>;
  text: Maybe<Scalars['String']>;
};

export type TextChunkModifyOperation = {
  __typename?: 'TextChunkModifyOperation';
  bold: Maybe<Scalars['Boolean']>;
  highlight: Maybe<Scalars['Boolean']>;
  hyperlinkUrl: Maybe<Scalars['String']>;
  strikeout: Maybe<Scalars['Boolean']>;
  text: Maybe<Scalars['String']>;
};

export type TextChunkOperation = TextChunkModifyOperation | TextChunkSplitOperation;

export type TextChunkSplitOperation = {
  __typename?: 'TextChunkSplitOperation';
  splitAt: Scalars['Int'];
  splitFirstHalfOperation: Maybe<TextChunkModifyOperation>;
  splitSecondHalfOperation: Maybe<TextChunkModifyOperation>;
};

export type TextChunkWithOperation = {
  __typename?: 'TextChunkWithOperation';
  chunk: TextChunk;
  operation: Maybe<TextChunkOperation>;
};

export type Tutorial = {
  __typename?: 'Tutorial';
  author: Maybe<Author>;
  id: Maybe<Scalars['ID']>;
  pages: Maybe<Array<Maybe<Page>>>;
  title: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  caption: Maybe<Scalars['String']>;
  platform: Maybe<VideoPlatform>;
  url: Maybe<Scalars['String']>;
};

export enum VideoPlatform {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE'
}

export type ActionComponentFragment = { __typename?: 'Action', paragraph: { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CarouselComponentFragment = { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null | undefined } | null | undefined> | null | undefined };

export type CarouselContentFragment = { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null | undefined } | null | undefined> | null | undefined };

export type CarouselImageFragment = { __typename?: 'Image', url: string | null | undefined };

export type CarouselItemFragment = { __typename?: 'Image', url: string | null | undefined };

export type CommandComponentFragment = { __typename?: 'Command', command: string | null | undefined };

export type FoldableComponentFragment = { __typename?: 'Foldable', shortDescription: string | null | undefined, elements: Array<{ __typename?: 'Action', paragraph: { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename?: 'Command' } | { __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Output' } | { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Video', platform: VideoPlatform | null | undefined, url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined };

export type HeaderContainerFragment = { __typename?: 'Tutorial', title: string | null | undefined };

export type ImageComponentFragment = { __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined };

export type ImageGroupComponentFragment = { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined };

export type OutputComponentFragment = { __typename?: 'Output', body: string | null | undefined };

export type PageComponentFragment = { __typename?: 'Page', title: string | null | undefined, nextPageNum: string | null | undefined, prevPageNum: string | null | undefined, progress: { __typename?: 'Progress', currentPageNum: number | null | undefined, numPages: number | null | undefined } | null | undefined, pageElements: Array<{ __typename?: 'Action', paragraph: { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename?: 'Command', command: string | null | undefined } | { __typename?: 'Foldable', shortDescription: string | null | undefined, elements: Array<{ __typename?: 'Action', paragraph: { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename?: 'Command' } | { __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Output' } | { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Video', platform: VideoPlatform | null | undefined, url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Output', body: string | null | undefined } | { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined } | { __typename?: 'Video', platform: VideoPlatform | null | undefined, url: string | null | undefined, caption: string | null | undefined } | null | undefined> | null | undefined };

export type PageTransitionComponentFragment = { __typename?: 'Page', nextPageNum: string | null | undefined, prevPageNum: string | null | undefined };

export type ParagraphComponentFragment = { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined } | null | undefined> | null | undefined };

export type ProgressBarFragment = { __typename?: 'Progress', currentPageNum: number | null | undefined, numPages: number | null | undefined };

export type TextChunkComponentFragment = { __typename?: 'TextChunk', text: string | null | undefined, highlight: boolean | null | undefined, bold: boolean | null | undefined, hyperlinkUrl: string | null | undefined, strikeout: boolean | null | undefined, inlineCode: boolean | null | undefined };

export type VideoComponentFragment = { __typename?: 'Video', platform: VideoPlatform | null | undefined, url: string | null | undefined, caption: string | null | undefined };

export const CarouselImageFragmentDoc = gql`
    fragment CarouselImage on Image {
  url
}
    `;
export const CarouselItemFragmentDoc = gql`
    fragment CarouselItem on Image {
  ...CarouselImage
}
    ${CarouselImageFragmentDoc}`;
export const CarouselContentFragmentDoc = gql`
    fragment CarouselContent on ImageGroup {
  images {
    ...CarouselItem
  }
}
    ${CarouselItemFragmentDoc}`;
export const CarouselComponentFragmentDoc = gql`
    fragment CarouselComponent on ImageGroup {
  ...CarouselContent
}
    ${CarouselContentFragmentDoc}`;
export const HeaderContainerFragmentDoc = gql`
    fragment HeaderContainer on Tutorial {
  title
}
    `;
export const PageTransitionComponentFragmentDoc = gql`
    fragment PageTransitionComponent on Page {
  nextPageNum
  prevPageNum
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
    ${TextChunkComponentFragmentDoc}`;
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
    ${ImageComponentFragmentDoc}`;
export const ActionComponentFragmentDoc = gql`
    fragment ActionComponent on Action {
  paragraph {
    ...ParagraphComponent
  }
}
    ${ParagraphComponentFragmentDoc}`;
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
${ActionComponentFragmentDoc}`;
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
  ...PageTransitionComponent
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
    ${PageTransitionComponentFragmentDoc}
${ProgressBarFragmentDoc}
${VideoComponentFragmentDoc}
${ParagraphComponentFragmentDoc}
${ImageGroupComponentFragmentDoc}
${FoldableComponentFragmentDoc}
${ActionComponentFragmentDoc}
${CommandComponentFragmentDoc}
${OutputComponentFragmentDoc}
${ImageComponentFragmentDoc}`;
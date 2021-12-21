type Query {
  tutorial(authorId: String!, tutorialId: String!): Tutorial
}

type Author {
  id: ID
}

type Tutorial {
  id: ID
  author: Author
  title: String
  pages: [Page]
}

type Page {
  id: ID
  pageNum: String
  nextPageNum: String
  prevPageNum: String
  title: String
  progress: Progress
  pageElements: [PageElement]
}

union PageElement =
    Paragraph
  | Command
  | Output
  | Video
  | Action
  | ImageGroup
  | Image
  | Foldable

union PlainElement =
    Paragraph
  | Command
  | Output
  | Video
  | Action
  | ImageGroup
  | Image

enum VideoPlatform {
  YOUTUBE
  VIMEO
}

type Video {
  platform: VideoPlatform
  url: String
  caption: String
}

type ImageGroup {
  images: [Image]
}

type Image {
  url: String
  caption: String
}

type Output {
  body: String
}

type Progress {
  numPages: Int
  currentPageNum: Int
}

type Paragraph {
  chunks: [TextChunk]
}

type Action {
  paragraph: Paragraph
}

type TextChunk {
  text: String
  highlight: Boolean
  bold: Boolean
  hyperlinkUrl: String
  strikeout: Boolean
  inlineCode: Boolean
}

type Foldable {
  shortDescription: String
  elements: [PlainElement]
}

type Command {
  command: String
}

type CommandAndOutput {
  command: String
  output: String
}

type DirectoryStructure {
  contents: [String]
}

type Note {
  body: String
}
type TextChunkModifyOperation {
  bold: Boolean
  highlight: Boolean
  hyperlinkUrl: String
  strikeout: Boolean
  text: String
}

type TextChunkSplitOperation {
  splitAt: Int!
  splitFirstHalfOperation: TextChunkModifyOperation
  splitSecondHalfOperation: TextChunkModifyOperation
}

union TextChunkOperation = TextChunkModifyOperation | TextChunkSplitOperation

type TextChunkWithOperation {
  chunk: TextChunk!
  operation: TextChunkOperation
}

type DecorateTextChunksInput {
  chunks: [TextChunkWithOperation]!
}

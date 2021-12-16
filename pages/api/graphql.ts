import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    tutorial(id: String!, currentPageNum: String): Tutorial
  }

  type Tutorial {
    id: ID
    title: String
    pages: [Page]
    currentPage: Page
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
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: "Nextjs" }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

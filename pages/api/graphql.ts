import { ApolloServer, gql } from "apollo-server-micro";
import fs from "fs";
import path from "path";
import { Resolvers } from "./../../lib/generated/graphql-resolver";

const typeDefs = gql`
  type Query {
    tutorial(id: String!): Tutorial
  }

  type Tutorial {
    id: ID
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
`;

const resolvers: Resolvers = {
  Query: {
    tutorial: async (parent, args, context) => {
      const tutorialId = args.id;
      const pkg = await readJson(tutorialId, "page1.json");

      return {};
    },
    // users(parent, args, context) {
    //   return [{ name: "Nextjs" }];
    // },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  context: async ({ req }: any) => {
    try {
      // console.log(pkg);
      return {};
    } catch (err) {
      console.log("***ERROR OCURRED***");
      console.log(err);
    }
  },
});

const startServer = apolloServer.start();

const readJson = async (dirname: string, filename: string): Promise<any> => {
  const filepath = path.resolve("./public", "tutorial-data", dirname, filename);
  const fileContent = await fs.promises.readFile(filepath, "utf8");
  const jsonData = JSON.parse(fileContent);
  return jsonData;
};

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

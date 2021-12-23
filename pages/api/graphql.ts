import { listPageJsonFiles, readJsonFile } from "./../../lib/tutorialDirs";
import { ApolloServer, gql } from "apollo-server-micro";
import fs from "fs";
import path from "path";
import { Tutorial } from "../../lib/generated/graphql";
import { Page, Resolvers } from "./../../lib/generated/graphql";

const typeDefs = gql`
  ${fs.readFileSync(path.resolve("schema.gql"), "utf8")}
`;

const readPageJsonFiles = async (
  authorId: string,
  tutorialId: string
): Promise<any[]> => {
  try {
    const jsonFiles = await listPageJsonFiles(authorId, tutorialId);
    let pages = [];
    for (const jsonFile of jsonFiles) {
      const pageObj = await readJsonFile(authorId, tutorialId, jsonFile);
      pages.push(pageObj);
    }
    return pages;
  } catch (err) {
    throw err;
  }
};

const readTutorialJsonFile = async (
  authorId: string,
  tutorialId: string
): Promise<any> => {
  const tutorialObj = await readJsonFile(authorId, tutorialId, "tutorial.json");
  return tutorialObj;
};

const readTutorialJson = async (
  authorId: string,
  tutorialId: string
): Promise<Tutorial> => {
  const tutorial = await readTutorialJsonFile(authorId, tutorialId);
  const pages: Page[] = await readPageJsonFiles(authorId, tutorialId);
  return {
    id: tutorialId,
    author: {
      id: authorId,
    },
    title: tutorial.title,
    pages: pages,
  };
};

//@ts-ignore
const resolvers: Resolvers = {
  Query: {
    tutorial: async (_, args, context) => {
      try {
        const authorId = args.authorId;
        const tutorialId = args.tutorialId;
        const data = await readTutorialJson(authorId, tutorialId);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("internal error occurred");
      }
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
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

export default async function handler(req: any, res: any) {
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

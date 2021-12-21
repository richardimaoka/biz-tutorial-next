import { ApolloServer, gql } from "apollo-server-micro";
import fs from "fs";
import path from "path";
import { Tutorial } from "../../lib/generated/graphql";
import { Resolvers } from "./../../lib/generated/graphql-resolver";

const typeDefs = gql`
  ${fs.readFileSync(path.resolve("schema.gql"), "utf8")}
`;

const resolveTutorialDir = (authorId: string, tutorialId: string): string => {
  return path.resolve("./public", "tutorial-data", authorId, tutorialId);
};

const fileNamesInDir = async (dirName: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(dirName, (err, files) => {
      if (err) return reject(err);
      else return resolve(files);
    });
  });
};

const regExJson = /page\d*\.json/;
const isPageJsonFile = (fileName: string): boolean => {
  return regExJson.test(fileName);
};

const readJsonFile = async (
  dirName: string,
  fileName: string
): Promise<any> => {
  const filepath = path.resolve(dirName, fileName);
  const fileContent = await fs.promises.readFile(filepath, "utf8");
  const jsonData = JSON.parse(fileContent);
  return jsonData;
};

const readPageJsonFiles = async (
  authorId: string,
  tutorialId: string
): Promise<any[]> => {
  const tutorialDir = resolveTutorialDir(authorId, tutorialId);
  const fileNames = await fileNamesInDir(tutorialDir);
  const jsonFiles = fileNames.filter(isPageJsonFile);

  let pages = [];
  for (const jsonFile of jsonFiles) {
    const pageObj = await readJsonFile(tutorialDir, jsonFile);
    pages.push(pageObj);
  }

  return pages;
};

const readTutorialJson = async (authorId: string, tutorialId: string) => {
  try {
    const pages = readPageJsonFiles(authorId, tutorialId);
    return {
      id: tutorialId,
      author: {
        id: authorId,
      },
      title: "the tutorial title",
      pages: pages,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const resolvers: Resolvers = {
  Query: {
    tutorial: async (_, args, context) => {
      const authorId = args.authorId;
      const tutorialId = args.tutorialId;
      const data = await readTutorialJson(authorId, tutorialId);
      return data;
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

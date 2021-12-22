import fs from "fs";
import path from "path";

const tutorialDataPath: string = path.resolve("public", "tutorial-data");

export const authorDirPath = (authorId: string): string =>
  path.resolve(tutorialDataPath, authorId);

export const tutorialDirPath = (authorId: string, tutorialId: string): string =>
  path.resolve(authorDirPath(authorId), tutorialId);

const fileNamesInDir = async (dirName: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(dirName, (err, files) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(files);
      }
    });
  });
};

export const authorDirNames = async (): Promise<string[]> => {
  try {
    const dirNames = await fileNamesInDir(tutorialDataPath);
    return dirNames;
  } catch (err) {
    throw new Error(
      `authorDirNames() failed to read dirs in '${tutorialDataPath}: ${err}`
    );
  }
};

export const tutorialDirNames = async (authorId: string): Promise<string[]> => {
  const authorDir = authorDirPath(authorId);
  try {
    const dirNames = await fileNamesInDir(authorDir);
    return dirNames;
  } catch (err) {
    throw new Error(
      `tutorialDirNames(authorId = ${authorId}) failed to read dirs in '${authorDir}': ${err}`
    );
  }
};

const regExJson = /page\d*\.json/;
const isPageJsonFile = (fileName: string): boolean => {
  return regExJson.test(fileName);
};

export const listPageJsonFiles = async (
  authorId: string,
  tutorialId: string
): Promise<string[]> => {
  const tutorialDir = tutorialDirPath(authorId, tutorialId);
  try {
    const dirNames = await fileNamesInDir(tutorialDir);
    const jsonFiles = dirNames.filter(isPageJsonFile);
    if (jsonFiles.length > 0) {
      return dirNames;
    } else {
      throw new Error("no json file found");
    }
  } catch (err) {
    throw new Error(
      `tutorialDirNames(authorId = ${authorId}) failed to read dirs in '${tutorialDir}': ${err}`
    );
  }
};

// const dir = authorDir(authorId)
//   const fs.readdirSync
//   return []
// }

//   for (const authorDirName of authorDirs) {
//     const tutorialDirNames = fs.readdirSync(
//       path.resolve("public", "tutorial-data", authorDirName)
//     );

//     //collect all dirs and files into pathParams
//     for (const tutorialDirName of tutorialDirNames) {
//       pathParams.push({
//         params: { authorId: authorDirName, tutorialId: tutorialDirName },
//       });
//     }
//   }

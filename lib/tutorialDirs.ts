import fs from "fs";
import path from "path";

export const tutorialDataPath: string = path.resolve("public", "tutorial-data");

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
    const dirNames = fileNamesInDir(tutorialDataPath);
    return dirNames;
  } catch (err) {
    throw new Error(`authorDirNames() failed: ${err}`);
  }
};

export const authorDirPath = (authorId: string): string =>
  path.resolve(tutorialDataPath, authorId);

export const tutorialDirNames = async (authorId: string): Promise<string[]> => {
  const authorDir = authorDirPath(authorId);
  try {
    const dirNames = fileNamesInDir(authorDir);
    return dirNames;
  } catch (err) {
    throw new Error(`tutorialDirNames(authorId = ${authorId}) failed: ${err}`);
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

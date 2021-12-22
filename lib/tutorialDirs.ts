import fs from "fs";
import path from "path";

export const tutorialDataPath: string = path.resolve("public", "tutorial-data");

export const authorDirNames = async (): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(tutorialDataPath, (err, files) => {
      if (err) {
        return reject(
          new Error(
            `authorDirNames(): Failed to read directories in ${tutorialDataPath}`
          )
        );
      } else return resolve(files);
    });
  });
};

export const authorDirPath = (authorId: string): string =>
  path.resolve(tutorialDataPath, authorId);

export const tutorialDirNames = async (authorId: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    const authorDir = authorDirPath(authorId);
    fs.readdir(authorDir, (err, files) => {
      if (err) {
        return reject(
          new Error(
            `tutorialDirNames(authorId = ${authorId}): Failed to read directories in ${authorDir}`
          )
        );
      } else return resolve(files);
    });
  });
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

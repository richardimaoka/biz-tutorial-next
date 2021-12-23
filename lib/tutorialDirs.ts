import fs from "fs";
import path from "path";

const tutorialDataPath: string = path.resolve("public", "tutorial-data");

const authorDirPath = (authorId: string): string =>
  path.resolve(tutorialDataPath, authorId);

const tutorialDirPath = (authorId: string, tutorialId: string): string =>
  path.resolve(authorDirPath(authorId), tutorialId);

const jsonFilePath = (
  authorId: string,
  tutorialId: string,
  jsonFileName: string
): string => path.resolve(authorDirPath(authorId), tutorialId, jsonFileName);

export const authorDirNames = async (): Promise<string[]> => {
  try {
    const dirNames = await fs.promises.readdir(tutorialDataPath);
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
    const dirNames = await fs.promises.readdir(authorDir);
    return dirNames;
  } catch (err) {
    throw new Error(
      `tutorialDirNames(authorId = ${authorId}) failed to read dirs in '${authorDir}': ${err}`
    );
  }
};

const regExJson = /page(\d)*\.json/;
const extractPageNumber = (pageJsonFileName: string): string =>
  pageJsonFileName.replace(regExJson, "$`");

const isPageJsonFile = (fileName: string): boolean => {
  return regExJson.test(fileName);
};

export const listPageJsonFiles = async (
  authorId: string,
  tutorialId: string
): Promise<string[]> => {
  const tutorialDir = tutorialDirPath(authorId, tutorialId);
  try {
    const dirNames = await fs.promises.readdir(tutorialDir);
    const jsonFiles = dirNames.filter(isPageJsonFile);
    if (jsonFiles.length > 0) {
      return dirNames;
    } else {
      throw new Error("no json file found");
    }
  } catch (err) {
    throw new Error(
      `listPageJsonFiles(authorId = ${authorId}, tutorialId = ${tutorialId}) failed to read dirs in '${tutorialDir}': ${err}`
    );
  }
};

export const listPageNumbers = async (
  authorId: string,
  tutorialId: string
): Promise<string[]> => {
  try {
    const jsonFiles = listPageJsonFiles(authorId, tutorialId);
    const pageNums = jsonFiles.map(extractPageNumber);
    return pageNums;
  } catch (err) {
    throw new Error(
      `listPageNumbers(authorId = ${authorId}, tutorialId = ${tutorialId}) failed to in : ${err}`
    );
  }
};

export const readJsonFile = async <R = any>(
  authorId: string,
  tutorialId: string,
  jsonFileName: string
): Promise<R> => {
  const filePath = jsonFilePath(authorId, tutorialId, jsonFileName);
  try {
    const dataString = await fs.promises.readFile(filePath, "utf-8");
    const jsObject = JSON.parse(dataString);
    return jsObject;
  } catch (err) {
    throw new Error(
      `readPageJson(authorId = ${authorId}, tutorialId = ${tutorialId}, jsonFileName = ${jsonFileName}) failed to read '${filePath}': ${err}`
    );
  }
};

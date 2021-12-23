import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import fs from "fs";
import {
  authorDirNames,
  listPageJsonFiles,
  listPageNumbers,
  tutorialDirNames,
} from "../../../lib/tutorialDirs";

interface StaticProps extends ParsedUrlQuery {
  authorId: string;
  tutorialId: string;
  pageNum: string;
}

export const getStaticProps: GetStaticProps<StaticProps, StaticProps> = async ({
  params,
}) => {
  console.log("params", params);
  if (params) {
    return {
      props: { ...params },
    };
  } else {
    throw new Error(`error in getStaticProps(): ${params}`);
  }
};

interface StaticPathParams {
  params: StaticProps;
}
// return type: { paths: StaticPathParams[], fallback: boolean }
export const getStaticPaths: GetStaticPaths<StaticProps> = async () => {
  let pathParams: StaticPathParams[] = [];
  // `pathParams` will be = [
  //    { params: { authorId: "richardimaoka", tutorialId: fileName , pageNum : "1"} },
  //    { params: { authorId: "richardimaoka", tutorialId: fileName , pageNum : "2"} },
  //    { params: { authorId: "richardimaoka", tutorialId: fileName , pageNum : "3"} }
  // ]

  try {
    //collect all dirs and files into pathParams
    const authorDirs = await authorDirNames();
    for (const authorId of authorDirs) {
      const tutorialDirs = await tutorialDirNames(authorId);

      for (const tutorialId of tutorialDirs) {
        const pageNumberStrings = await listPageNumbers(authorId, tutorialId);

        for (const pageNum of pageNumberStrings) {
          pathParams.push({
            params: { authorId, tutorialId, pageNum },
          });
        }
      }
    }

    return {
      paths: pathParams,
      fallback: false,
    };
  } catch (err) {
    console.log("Error in getStaticPaths: ", err);
    throw err;
  }
};

const PageNum = ({}): JSX.Element => <div>aaaa</div>;

export default PageNum;

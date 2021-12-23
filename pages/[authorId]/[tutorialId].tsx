import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { ParsedUrlQuery } from "querystring";
import { TutorialComponent } from "../../components/TutorialComponent";
import { authorDirNames, tutorialDirNames } from "../../lib/tutorialDirs";

interface StaticProps extends ParsedUrlQuery {
  authorId: string;
  tutorialId: string;
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
    throw new Error(`Error in getStaticProps(): ${params}`);
  }
};

interface StaticPathParams {
  params: StaticProps;
}
// return type: { paths: StaticPathParams[], fallback: boolean }
export const getStaticPaths: GetStaticPaths<StaticProps> = async () => {
  let pathParams: StaticPathParams[] = [];
  // `pathParams` will be = [
  //    { params: { authorId: "richardimaoka", tutorialId: fileName } },
  //    { params: { authorId: "richardimaoka", tutorialId: fileName } },
  //    { params: { authorId: "richardimaoka", tutorialId: fileName } }
  // ]

  try {
    const authorDirs = await authorDirNames();
    for (const authorId of authorDirs) {
      const tutorialDirs = await tutorialDirNames(authorId);

      //collect all dirs and files into pathParams
      for (const tutorialId of tutorialDirs) {
        pathParams.push({
          params: { authorId, tutorialId },
        });
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

const Id = ({ authorId, tutorialId }: StaticProps): JSX.Element => (
  <TutorialComponent authorId={authorId} tutorialId={tutorialId} />
);

export default Id;

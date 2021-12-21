import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { ParsedUrlQuery } from "querystring";
import { TutorialComponent } from "../../components/TutorialComponent";

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
  //    { params: { authorId: "richardimaoka", tutorialId: fileName } },
  //    { params: { authorId: "richardimaoka", tutorialId: fileName } },
  //    { params: { authorId: "richardimaoka", tutorialId: fileName } }
  // ]

  const authorDirs = fs.readdirSync(path.resolve("public", "tutorial-data"));
  for (const authorDirName of authorDirs) {
    const tutorialDirNames = fs.readdirSync(
      path.resolve("public", "tutorial-data", authorDirName)
    );

    //collect all dirs and files into pathParams
    for (const tutorialDirName of tutorialDirNames) {
      pathParams.push({
        params: { authorId: authorDirName, tutorialId: tutorialDirName },
      });
    }
  }

  return {
    paths: pathParams,
    fallback: false,
  };
};

const Id = ({ authorId, tutorialId }: StaticProps): JSX.Element => (
  <TutorialComponent authorId={authorId} tutorialId={tutorialId} />
);

export default Id;

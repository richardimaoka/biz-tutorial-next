import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import fs from "fs";

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
        params: {
          authorId: authorDirName,
          tutorialId: tutorialDirName,
          pageNum: "1",
        },
      });
    }
  }

  return {
    paths: pathParams,
    fallback: false,
  };
};

const PageNum = ({}): JSX.Element => <div>aaaa</div>;

export default PageNum;

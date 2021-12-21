import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { ParsedUrlQuery } from "querystring";

interface StaticPathProps extends ParsedUrlQuery {
  user: string;
  tutorial: string;
}

interface StaticPathParams {
  params: StaticPathProps;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params");
  console.log(params);
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths<StaticPathProps> = async () => {
  let pathParams: StaticPathParams[] = [];
  // `pathParams` will be = [
  //    { params: { user: "richardimaoka", tutorial: fileName } },
  //    { params: { user: "richardimaoka", tutorial: fileName } },
  //    { params: { user: "richardimaoka", tutorial: fileName } }
  // ]

  const userDirs = fs.readdirSync(path.resolve("public", "tutorial-data"));
  for (const userDirName of userDirs) {
    const fileNames = fs.readdirSync(
      path.resolve("public", "tutorial-data", userDirName)
    );

    //collect all dirs and files into pathParams
    for (const fileName of fileNames) {
      pathParams.push({ params: { user: userDirName, tutorial: fileName } });
    }
  }

  console.log("pathParams", pathParams);

  return {
    paths: pathParams,
    fallback: false,
  };
};

const Id = ({ params }): JSX.Element => {
  console.log("Id params", params);
  return <div>Id</div>;
};

export default Id;

import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps called");
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let pathParams = [];
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

  console.log(pathParams);

  return {
    paths: pathParams,
    fallback: true,
  };
};

const Id = (): JSX.Element => {
  return <div>Id</div>;
};

export default Id;

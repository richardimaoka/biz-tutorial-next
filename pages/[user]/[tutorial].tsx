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
  //    { params: { user: userDirName, tutorial: fileName } },
  //    { params: { user: userDirName, tutorial: fileName } },
  //    { params: { user: userDirName, tutorial: fileName } }
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

  console.log(pathParams);

  return {
    paths: pathParams,
    fallback: true,
  };
};

//This is read by GraphQL codegen to generate types
// gql`
//   query GetTutorial {
//     tutorial (id: "wsl"){
//       ...HeaderContainer
//     }
//     ${HeaderContainer.fragments}
//   }
// `;

const Id = (): JSX.Element => {
  return <div>Id</div>;
};

export default Id;

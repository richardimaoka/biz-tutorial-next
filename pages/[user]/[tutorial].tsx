import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { aaa: "1" } }],
    fallback: true,
  };
};

const Id = (): JSX.Element => {
  return <div>Id</div>;
};

export default Id;

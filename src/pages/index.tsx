

import Head from "next/head";
import dynamic from "next/dynamic";

// const HomeLazy = dynamic(
//   () => {
//     return import("../components/layout/index");
//   },
//   { ssr: false }
// );
import HomePage from  '@/components/Layout/HomePage'


const IndexPage = () => {
  return (
    <HomePage/>
    );
};

export default IndexPage;
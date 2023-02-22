import React from "react";
import Head from "next/head";

export const Headinfo = ({ title, keyword, contents }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword}></meta>
        <meta contents={contents}></meta>
      </Head>
    </>
  );
};

Headinfo.defaultProps = {
  title: "My Blog",
  keyword: "popular Keyword",
  contents: "special contents",
};

import React from "react";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta keyword="My Blog powered by Next.js"></meta>
        <meta contents="My Blog powered by Next.js"></meta>
      </Head>
      <div>{children}</div>
      <Nav />
    </>
  );
};

export default Layout;

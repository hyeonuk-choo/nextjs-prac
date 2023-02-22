import React from "react";
import Nav from "./Nav";
import Head from "next/head";
import { Headinfo } from "./Headinfo";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My First Blog </title>
        <meta></meta>
        <meta></meta>
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;

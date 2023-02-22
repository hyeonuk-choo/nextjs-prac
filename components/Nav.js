import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/photos">photos</Link>
          </li>
          <li>
            <Link href="/sub">sub index</Link>
          </li>
          <li>
            <Link href="/sub/about">sub about</Link>
          </li>
          <li>
            <Link href="/sub/1">sub any</Link>
          </li>
          <li>
            <Link href="/sub/2">sub any</Link>
          </li>
          <li>
            <Link href="/sub/문자, 공백특수문자~!?도 되나?">sub any</Link>
          </li>
          <li>
            <Link href="/sub/fetch">sub fetch</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

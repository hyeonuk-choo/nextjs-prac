import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/sub">/pages/sub/index.js</Link>
        </li>
        <li>
          <Link href="/sub/about">/pages/sub/about.js</Link>
        </li>
        <li>
          <Link href="/sub/1">/pages/sub/[any].js</Link>
        </li>
        <li>
          <Link href="/sub/2">/pages/sub/[any].js</Link>
        </li>
        <li>
          <Link href="/sub/문자, 공백특수문자~!?도 되나?">
            /pages/sub/[any].js
          </Link>
        </li>
        <li>
          <Link href="/sub/fetch">/pages/sub/fetch.js</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;

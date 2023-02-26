import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <>
      <h1 className={styles.home}>
        here is My Webpage! Make yourself at home ^^
      </h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

// export const getServerSideProps = async () => {
//   // try, catch(e)문을 통한 예외처리
//   try {
//     const res = await fetch("http://localhost:8080/api/posts");
//     const posts = await res.json();
//     return { props: { posts } };
//   } catch (e) {
//     return { props: {} };
//   }
// };

export const getStaticProps = async () => {
  // try, catch(e)문을 통한 예외처리
  try {
    const res = await fetch("http://localhost:8080/api/posts");
    const posts = await res.json();
    return { props: { posts }, revalidate: 20 }; // getStaticProps 단점보완을 위해, revalidate 속성추가
  } catch (e) {
    return { props: {} };
  }
};

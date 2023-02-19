import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function FirstPost() {
  return (
    <>
      <Layout about>
        <h1>About</h1>
        <section className={styles.headingMd}>
          <p>
            This is my little corner of the internet where I can tinker on
            things. I'm currently working on a few projects, one of which is
            this website.
          </p>
          <p>
            I'm building this site using Next.js, which is a React framework.
          </p>
          <p>
            I'm learning as I go, so if you see anything that could be improved,
            please let me know (via a PR or an Issue).
          </p>
        </section>
      </Layout>
    </>
  );
}
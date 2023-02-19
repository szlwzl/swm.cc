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
            I'm building this site using <a href="https://nextjs.org/">Next.js</a>, which is a <a href="https://reactjs.org/">React</a> framework.
          </p>
          <p>
            I'm learning as I go, so if you see anything that could be improved,
            please let me know (via a <a href="https://github.com/swmcc/swm.cc/pulls">PR</a> or an <a href="https://github.com/swmcc/swm.cc/issues">Issue</a>).
          </p>
        </section>
      </Layout>
    </>
  );
}
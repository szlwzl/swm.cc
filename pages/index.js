import { Main } from "next/document";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout, { SITE_TITLE } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p>
          Hi, I'm <strong>Stephen</strong>. I'm a software engineer, currently
          working for <em>$BIG_CORP</em>. I'm also but not limited to being a
          self confessed coffee snob, aspiring gardener, ever frustrated golfer
          and all round idiot.
        </p>
      </section>
    </Layout>
  );
}
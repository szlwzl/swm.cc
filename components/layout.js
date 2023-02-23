import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Stephen McCullough";
export const SITE_TITLE = "The home of " + name;

export default function Layout({ children, home, about }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={
            "https://og-image.now.sh/" +
            encodeURI(SITE_TITLE) +
            ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
          }
        />
        <meta name="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}

      <div className={styles.footer}>
        {!about && <Link href="/about">About</Link>}
      </div>

      <footer class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Made with ❤️ by
          <a
            class="text-neutral-800 dark:text-neutral-400"
            href="/"
          >
            &nbsp;Stephen McCullough
          </a>
        </div>
      </footer>
    </div>
  );
}

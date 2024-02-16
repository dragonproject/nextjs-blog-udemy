import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <Link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image alt="ad" src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} width={90} height={90} />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Image alt="ad" src="/images/profile.png" className={`${utilStyles.borderCircle}`} width={90} height={90} />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <Link href="/">← ホームへ戻る</Link>)}
        </div>
    );
};

export default layout;
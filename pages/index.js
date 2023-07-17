import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import homeStyles from '@/styles/home.module.css';
import { getPostsData } from '@/lib/post';
// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context) {

//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

const inter = Inter({ subsets: ['latin'] });

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>
          私は何もないダメな人です。死ぬしかない人です。最近母親も死にました。
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h3>エンジニアのブログ</h3>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Image src={`${thumbnail}`} className={styles.thumbnailImage} width={100} height={100} alt={title} />
              </Link>
              <Link className={'utilStyle.boldText'} href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>

          ))}
        </div>
      </section>
    </Layout>
  );
}


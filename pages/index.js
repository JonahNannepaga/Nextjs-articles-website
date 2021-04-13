import {server} from '../config/index'
import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Welcome Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Welcome to Next.js</h1> */}

      <ArticleList articles={articles}></ArticleList>
    </div>
  )
}

/* ------------------------- Internal API - Example ------------------------- */

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

/* ------------------------- External API - Example ------------------------- */

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

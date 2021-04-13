import { route } from 'next/dist/next-server/server/router';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {server} from '../../../config'
import Meta from '../../../components/Meta'


function article({article}) {
    // const router = useRouter();
    // const {id} = router.query;
    return (
        <>
            <Meta title={article.title} description={article.description} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <p>This is an article {article.id}</p>
            <Link href="/">Go Back</Link>
        </>
    )
}
/* Server side props are slower and technically we are making a call at run time and not on build time  */

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
  
//     return {
//       props: {
//         article
//       }
//     }
//   }

/* ------------------------- Internal API - Example ------------------------- */

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  // Generate all the ids into a array
  const ids = articles.map(article => article.id);

  //Create a params object (generating all the paths)
  const paths = ids.map(id=>({params:{id: id.toString()}}));

  return {
    paths,
    fallback: false,
  }
}

/* -------------------------- External API - Eample ------------------------- */

  // export const getStaticProps = async (context) => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  //   const article = await res.json();
  
  //   return {
  //     props: {
  //       article
  //     }
  //   }
  // }

  // export const getStaticPaths = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   const articles = await res.json();
  
  //   // Generate all the ids into a array
  //   const ids = articles.map(article => article.id);

  //   //Create a params object (generating all the paths)
  //   const paths = ids.map(id=>({params:{id: id.toString()}}));

  //   return {
  //     paths,
  //     fallback: false,
  //   }
  // }



export default article

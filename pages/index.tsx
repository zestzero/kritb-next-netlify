import Head from 'next/head'
import Link from 'next/link'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { getAllPosts } from 'lib/postApi'
import { Post } from 'types/post'

export default function Home({ allPosts }: { allPosts: Post[] }) {
  return (
    <div className="container">
      <Head>
        <title>KritB - My personal blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {allPosts && (
          <Link href={`/posts/${allPosts[0].slug}`} passHref={true}>
            <a>
              {allPosts[0].title} : {new Date(allPosts[0].date).toDateString()}
            </a>
          </Link>
        )}
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

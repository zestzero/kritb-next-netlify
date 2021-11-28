import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
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
        <Header title="Welcome!" />
        <p className="description">😋</p>
      </main>
      {allPosts && (
        <div>
          {allPosts[0].title} : {new Date(allPosts[0].date).toDateString()}
        </div>
      )}
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

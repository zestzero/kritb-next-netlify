import Head from 'next/head'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { getAllPosts } from 'lib/postApi'
import { Post } from 'types/post'
import Animate from 'components/commons/Animate/Animate'
import Posts from 'components/Posts/Posts'

export default function Home({ allPosts }: { allPosts: Post[] }) {
  return (
    <div className="container">
      <Head>
        <title>KritB - My personal blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Animate animate="focus-in-contract">
          <h1>KRIT BANNACHAISIRISUK</h1>
        </Animate>
        <Posts posts={allPosts} />
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

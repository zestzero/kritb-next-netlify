import Head from 'next/head'

import Header from 'components/commons/Header/Header'
import Footer from 'components/commons/Footer/Footer'
import { getAllPosts } from 'lib/postApi'
import { Post } from 'types/post'
import Splash from 'components/HomePage/Splash'
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
        <Splash />
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

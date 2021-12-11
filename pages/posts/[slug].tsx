import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from 'lib/postApi'
import { markdownToHtml } from 'lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      {router.isFallback ? (
        `Loading…`
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | Next.js Blog Example</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <h1>{post.title}</h1>
            <span>{post.content}</span>
          </article>
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

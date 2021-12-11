import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Animate from 'components/commons/Animate/Animate'
import 'styles/globals.scss'

function Application({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = (url) => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  return (
    <div>
      {loading && <Animate animate="focus-in-contract">LOADING</Animate>}
      <Component {...pageProps} />
    </div>
  )
}

export default Application

import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/'), 5000)
  }, [])
  return (
    <>
      <Head>
        <title>Aflowchars | 404</title>
        <meta name="keywords" content="aflowchars" />
      </Head>
      <div className="container mx-auto px-14 min-h-screen flex flex-col justify-center items-center">
        <span className="font-bold text-sm text-gray-600">Oops...</span>
        <h1 className="font-bold text-9xl text-gray-800">404</h1>
        <h2 className="mt-2 mb-4 text-gray-600">
          The page that you requested was not found...
        </h2>
        <p className="bg-gray-800 text-gray-100 px-6 py-3">
          <Link href="/">
            <a className="text-sm font-medium uppercase">Back To Home</a>
          </Link>
        </p>
      </div>
    </>
  )
}

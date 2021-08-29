import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aflowchars | Home</title>
        <meta name="keywords" content="aflowchars" />
      </Head>
      <div className="container mx-auto">
        <div className="content min-h-screen px-14 py-8">
          <h1 className="font-bold text-2xl">Home Page</h1>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            id cum quae vitae ducimus ea nulla veritatis non iusto, praesentium
            sint laboriosam nemo exercitationem doloremque repellat? Laborum
            explicabo minus eligendi.
          </p>
          <p className="mb-8 py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            id cum quae vitae ducimus ea nulla veritatis non iusto, praesentium
            sint laboriosam nemo exercitationem doloremque repellat? Laborum
            explicabo minus eligendi.
          </p>
          <Link href="/flows">
            <a className="px-6 py-3 bg-gray-800 text-gray-100 font-medium text-sm">
              See The Flows
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

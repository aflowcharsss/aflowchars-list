import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: { flows: data },
  }
}

export default function Flows({ flows }) {
  return (
    <>
      <Head>
        <title>Aflowchars | Flows List</title>
        <meta name="keywords" content="aflowchars" />
      </Head>
      <div className="container mx-auto">
        <div className="content min-h-screen mx-auto px-14 py-8">
          <h1 className="font-bold text-2xl">Flows List Page</h1>
          <div className="grid grid-cols-12 gap-8 py-4">
            {flows.map((flow) => (
              <div
                key={flow.id}
                className="col-span-3 border p-4 rounded shadow-sm hover:shadow-md"
              >
                <Link href={`/flows/${flow.id}`}>
                  <a>
                    <h1 className="font-semibold text-lg text-gray-800">
                      {flow.name}
                    </h1>

                    <p className="mb-8 text-gray-500">{flow.email}</p>
                    <hr className="pb-2" />
                    <p className="text-purple-500">{flow.website}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

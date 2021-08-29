export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  const paths = data.map((flow) => {
    return {
      params: { id: flow.id.toString() },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const data = await response.json()

  return {
    props: { flow: data },
  }
}

export default function Details({ flow }) {
  return (
    <div className="container">
      <div className="content min-h-screen mx-auto px-14 py-8">
        <div className="mb-8 font-bold text-2xl">Details Page</div>
        <div className="py-8 px-12 border">
          <h1 className="font-bold text-lg text-gray-800">
            Name : {flow.name}
          </h1>
          <p className="my-4 text-gray-600">Email : {flow.email}</p>
          <p className="mb-4 text-purple-500">{flow.website}</p>
          <p className="text-gray-600">{flow.address.city}</p>
        </div>
      </div>
    </div>
  )
}

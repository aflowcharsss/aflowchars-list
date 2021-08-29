import Head from 'next/head'

export default function about() {
  return (
    <>
      <Head>
        <title>Aflowchars | About</title>
        <meta name="keywords" content="aflowchars" />
      </Head>
      <div className="about container mx-auto">
        <div className="content min-h-screen px-14 py-8">
          <h1 className="font-bold text-2xl">About Page</h1>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi porro explicabo quam vel illum placeat blanditiis illo sequi,
            ab unde accusantium animi quibusdam optio saepe? Quis provident
            cumque eaque!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi porro explicabo quam vel illum placeat blanditiis illo sequi,
            ab unde accusantium animi quibusdam optio saepe? Quis provident
            cumque eaque!
          </p>
        </div>
      </div>
    </>
  )
}

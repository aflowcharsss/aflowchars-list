import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="navbar flex items-center justify-between py-6 px-14 border-t shadow-none">
      <Link href="/">
        <h1 className="text-gray-800 font-medium text-lg uppercase">
          Aflowchars
        </h1>
      </Link>
      <ul className="flex items-center">
        <li className="mr-8 font-medium text-gray-600">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mr-8 font-medium text-gray-600">
          <Link href="/flows">
            <a>List Flows</a>
          </Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <div className="copyright text-sm text-gray-600">
        Copyright &copy; 2021 Aflowchars
      </div>
    </footer>
  )
}

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between py-4 px-14 border-b shadow-sm">
      <Link href="/">
        <Image src="/images/svg/logo-aflowchars.svg" width={40} height={40} />
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
    </nav>
  )
}

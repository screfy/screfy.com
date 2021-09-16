import Link from 'next/link'
import NavbarItem from './NavbarItem'

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" passHref>
        <a className="font-semibold">
          screfy<span className="text-info">.</span>com
        </a>
      </Link>

      <NavbarItem href="/projects">Projects</NavbarItem>
      <NavbarItem href="/technologies">Technologies</NavbarItem>
    </nav>
  )
}

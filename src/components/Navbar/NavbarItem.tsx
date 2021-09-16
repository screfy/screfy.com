import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ReactChild } from 'react'

interface Props {
  href: string
  children: ReactChild
}

export default function NavbarItem({ href, children }: Props): JSX.Element {
  const { asPath } = useRouter()

  return (
    <Link href={href} passHref>
      <a className={clsx('hover:text-white transition-colors', asPath === href && 'underline')}>{children}</a>
    </Link>
  )
}

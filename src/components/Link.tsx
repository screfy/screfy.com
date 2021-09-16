import { ReactChild } from 'react'

interface Props {
  href: string
  children: ReactChild
}

export default function Link({ href, children }: Props): JSX.Element {
  return (
    <a className="text-info hover:underline" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

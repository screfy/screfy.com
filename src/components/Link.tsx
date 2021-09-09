import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export function Link({ href, children }: Props): JSX.Element {
  return (
    <a className="hover:text-gray-300 underline transition-colors" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

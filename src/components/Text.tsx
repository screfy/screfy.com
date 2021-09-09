import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Text({ children }: Props): JSX.Element {
  return <p className="break-normal">{children}</p>
}

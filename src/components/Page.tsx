import { ReactChild } from 'react'

interface Props {
  children: ReactChild | ReactChild[]
}

export default function Page({ children }: Props): JSX.Element {
  return <div className="flex flex-col space-y-8">{children}</div>
}

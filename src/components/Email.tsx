interface Props {
  email: string
}

export function Email({ email }: Props): JSX.Element {
  return (
    <a href={`mailto:${email}`}>
      <code className="bg-secondary-dark hover:text-gray-300 border border-secondary-light border-dotted rounded-sm px-1 transition-colors">
        {email}
      </code>
    </a>
  )
}

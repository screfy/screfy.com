import { Email } from './components/Email'
import { Heading } from './components/Heading'
import { Link } from './components/Link'
import { Text } from './components/Text'

export function App(): JSX.Element {
  return (
    <div className="flex items-center min-h-screen px-6 md:px-64 bg-secondary text-primary-light">
      <div className="flex flex-col max-w-[37rem]">
        <Heading />
        <div className="flex flex-col mt-4 space-y-4">
          <Text>
            Hello, I am screfy, a fullstack web developer and open-source enthusiast. I am usually working with
            TypeScript, React, Docker and PostgreSQL.
          </Text>
          <Text>
            You can find most of my work on my <Link href="https://github.com/screfy">GitHub</Link>, and if you found
            value in something I have created, please feel free to give it star, or give me a shout-out.
          </Text>
        </div>
        <h3 className="text-lg text-primary mt-4">Contact</h3>
        <Text>
          You can reach out to me through my <Link href="https://twitter.com/screfy_">Twitter</Link>, as well as on my
          email address at <Email email="me@screfy.com" />.
        </Text>
      </div>
    </div>
  )
}

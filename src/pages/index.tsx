import Link from '../components/Link'
import Page from '../components/Page'
import Section from '../components/Section'

export default function Home(): JSX.Element {
  return (
    <Page>
      <Section heading={{ as: 'h1', text: `Hello, I'm screfy!` }}>
        <p>
          I am a fullstack web developer and open-source enthusiast. I’m most interested in web and serverless
          technologies, DevOps practices, and performant, responsive code.
        </p>
      </Section>

      <Section heading={{ as: 'h2', text: 'Contact' }}>
        <p>
          You can reach out to me through my <Link href="https://twitter.com/screfy_">Twitter</Link> where I’m most
          responsive (click{' '}
          <Link href="https://twitter.com/messages/compose?recipient_id=992740266963587072">here</Link> to DM me), or on
          my email address at <Link href="mailto:me@screfy.com">me@screfy.com</Link>.
        </p>
      </Section>
    </Page>
  )
}

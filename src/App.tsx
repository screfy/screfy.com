import { Heading } from './components/Heading'

export function App(): JSX.Element {
  return (
    <div className="flex items-center min-h-screen px-6 md:px-64 bg-secondary text-primary-light">
      <div className="flex flex-col max-w-[37rem]">
        <Heading />
      </div>
    </div>
  )
}

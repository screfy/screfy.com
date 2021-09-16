import { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex min-h-screen bg-black text-primary">
      <div className="max-w-3xl mx-auto py-8">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

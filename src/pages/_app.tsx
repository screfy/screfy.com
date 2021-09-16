import { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex min-h-screen bg-black text-primary">
      <div className="flex flex-col max-w-3xl mx-auto py-8">
        <Navbar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

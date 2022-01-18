import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';

const BASE_URL = 'https://screfy.com';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="flex justify-center min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-300">
        <NextSeo
          titleTemplate="%s – screfy"
          title="Home"
          description="Hey, I’m screfy, a fullstack web developer and open-source enthusiast."
          canonical={BASE_URL + pathname}
          additionalMetaTags={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'screfy (https://screfy.com)' },
            { name: 'url', content: BASE_URL + pathname },
          ]}
          additionalLinkTags={[{ rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]}
          openGraph={{ type: 'website', images: [{ url: `${BASE_URL}/banner.png` }] }}
          twitter={{ handle: '@screfy_', cardType: 'summary_large_image' }}
        />

        <div className="flex flex-col sm:w-[40rem] mx-6 sm:mx-0 my-8">
          <Navbar />
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

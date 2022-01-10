import { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';

const URL = process.env.NEXT_PUBLIC_URL;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex justify-center min-h-screen bg-black text-primary">
      <NextSeo
        titleTemplate="%s | screfy"
        title="Home"
        description="I am a fullstack web developer and open-source enthusiast."
        canonical={URL}
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'author', content: 'screfy (https://screfy.com)' },
          { name: 'url', content: URL },
        ]}
        additionalLinkTags={[{ rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]}
        openGraph={{ type: 'website', images: [{ url: `${URL}/logo_social-media.png` }] }}
        twitter={{ handle: '@screfy_', cardType: 'summary_large_image' }}
      />

      <div className="flex flex-col w-[36rem] mx-4 my-8">
        <Navbar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

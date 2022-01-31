import { GitHub, Twitter, Key } from 'react-feather';
import Divider from '../Divider';
import ThemeChanger from '../ThemeChanger';
import FooterIcon from './FooterIcon';
import NowPlaying from './NowPlaying';

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col space-y-3 sm:mt-24">
      <div className="flex space-x-3">
        <FooterIcon href="https://github.com/screfy" label="GitHub">
          <GitHub size="20" />
        </FooterIcon>

        <FooterIcon href="https://twitter.com/screfy_" label="Twitter">
          <Twitter size="20" />
        </FooterIcon>

        <FooterIcon href="https://keybase.io/screfy" label="Keybase">
          <Key size="20" />
        </FooterIcon>
      </div>

      <Divider />

      <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
        <NowPlaying />

        <ThemeChanger />
      </div>
    </footer>
  );
}

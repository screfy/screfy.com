import { GitHub, Twitter, Key } from 'react-feather';
import FooterItem from './FooterItem';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex mt-10 ml-auto space-x-4">
      <FooterItem href="https://github.com/screfy">
        <GitHub size="20" />
      </FooterItem>

      <FooterItem href="https://twitter.com/screfy_">
        <Twitter size="20" />
      </FooterItem>

      <FooterItem href="https://keybase.io/screfy">
        <Key size="20" />
      </FooterItem>
    </footer>
  );
}

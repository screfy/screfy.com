import { GitHub, Twitter, Key } from 'react-feather';
import FooterIcon from './FooterIcon';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col space-y-3 mt-24">
      <div className="flex space-x-3">
        <FooterIcon href="https://github.com/screfy">
          <GitHub size="20" />
        </FooterIcon>

        <FooterIcon href="https://twitter.com/screfy_">
          <Twitter size="20" />
        </FooterIcon>

        <FooterIcon href="https://keybase.io/screfy">
          <Key size="20" />
        </FooterIcon>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { withNextServerI18n } from 'i18next-mobx';
import { useTranslation } from 'react-i18next';

import '../models/i18n';
import I18nChangeLanguage from '../components/i18nChangeLanguage';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  return (
    <>
      <header className="header">
        <Link href="/">Home</Link> <Link href="/i18nextMobx">i18nextMobx</Link>
        <I18nChangeLanguage />
      </header>

      <Component {...pageProps} />
      <footer className="footer">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          {t('Created with')}&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </>
  );
}

export default withNextServerI18n(MyApp);

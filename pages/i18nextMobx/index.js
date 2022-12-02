import Head from 'next/head';
import { observer } from 'mobx-react';
import { t } from 'i18next-mobx';

import styles from '../../styles/i18nextMobx.module.css';

export default observer(function I18NextMobx() {
  return (
    <div className={styles.container}>
      <Head>
        <title>I18NextMobx</title>
      </Head>

      <main>
        <h2 className={styles.title}>
          {t('Welcome to')}{' '}
          <a href="https://github.com/Five-great/i18next-mobx">i18next-mobx!</a>
        </h2>
      </main>
    </div>
  );
});

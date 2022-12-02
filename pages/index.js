import Head from 'next/head';
import { observer } from 'mobx-react';
import { t } from 'i18next-mobx';

import styles from '../styles/Home.module.css';

export default observer(function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('Welcome to')} <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          {t('Get started by editing')}{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>{t('Documentation')} &rarr;</h3>
            <p>
              {t('Find in-depth information about features and API.', {
                framework: 'Next.js',
              })}
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>{t('Learn')} &rarr;</h3>
            <p>
              {t('Learn about in an interactive course with quizzes!', {
                framework: 'Next.js',
              })}
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>{t('Examples')} &rarr;</h3>
            <p>
              {t('Discover and deploy boilerplate example projects.', {
                framework: 'Next.js',
              })}
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>{t('Deploy')} &rarr;</h3>
            <p>
              {t('Instantly deploy your Next.js site to a public URL with', {
                framework: 'Next.js',
                deploy: 'Vercel',
              })}
            </p>
          </a>
        </div>
      </main>
    </div>
  );
});

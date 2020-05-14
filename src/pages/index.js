import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Fully compatible with cURL</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          NcURL support all cURL options, just change command `curl` to `ncurl`.
      </>
    ),
  },
  {
    title: <>JSON support & syntax highlight</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
          NcURL support JSON parsing, syntax highlight.
          More easier to read and understand.
      </>
    ),
  },
  {
    title: <>Easy to share with others</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
          NcURL can share with others through the website,
          make it easier to communicate and understand.
          And could manage requests on the website.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="NcURL - Next generation of cURL. Fully compatible with cURL. And with JSON support, syntax highlight, easy to share with others.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

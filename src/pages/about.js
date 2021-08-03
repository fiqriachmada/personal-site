import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const profiles = [
  {
    imageUrl: 'img/about.svg',
    p1: (
      <p>
        Hi There, <b>Achmada Fiqri A Rasyad</b> right here, or you can call me{' '}
        <b>Mada</b> shortly
      </p>
    ),
    p2: (
      <p>
        Currently I'm a college student at{' '}
        <b>
          <a href="https://itats.ac.id/">
            Institut Teknologi Adhi Tama Surabaya
          </a>
        </b>
      </p>
    ),
    p3: (
      <p>
        Sometimes I'm doing code in Web, iOS's SwiftUI, either Playing Mobile
        Legends and Basketball with ❤️ too
      </p>
    ),
    p4: <p>Currently based on Surabaya, Indonesia</p>,
    language: (
      <div>
        <h1>Language</h1>
        <p>JS{''}</p>
        <p>JS{''}</p>
      </div>
    ),
  },
];

function Profiles({imageUrl, p1, p2, p3, p4, language}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--12')}>
      <div className="card margin--md">
        {imgUrl && (
          <div className="text--center">
            <img className={styles.profileImage} src={imgUrl} loading="lazy" />
          </div>
        )}
        <div className="margin--md">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <div className="row">
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
            <div className="col col--3">{language}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const judul = 'About';

  return (
    <Layout title={judul}>
      <main>
        {profiles && profiles.length > 0 && (
          <section className={styles.profiles}>
            <div className="container">
              <div className="row">
                {profiles.map(({imageUrl, p1, p2, p3, p4, language}) => (
                  <Profiles
                    imageUrl={imageUrl}
                    p1={p1}
                    p2={p2}
                    p3={p3}
                    p4={p4}
                    language={language}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default About;

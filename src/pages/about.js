import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const profiles = [
  {
    imageUrl: 'img/about.svg',
    p1: (
      <p className="margin-left--sm margin-right--sm">
        Hi There, <b>Achmada Fiqri A Rasyad</b> right here, or you can call me{' '}
        <b>Mada</b> shortly
      </p>
    ),
    p2: (
      <p className="">
        Currently I'm a college student at{' '}
        <b className="margin--none">
          <a href="https://itats.ac.id/">
            Institut Teknologi Adhi Tama Surabaya
          </a>
        </b>
      </p>
    ),
    p3: (
      <p className="margin-left--sm margin-right--sm">
        Sometimes I'm doing code in Web, iOS's SwiftUI, either Playing Mobile
        Legends and Basketball with ❤️ too
      </p>
    ),
    p4: (
      <p className="margin-left--sm margin-right--sm">
        Currently based on Surabaya, Indonesia
      </p>
    ),
    language: (
      <div className="margin-left--sm margin-right--sm">
        <h1>Language</h1>
        <p>JavaScript{''}</p>
        <p>HTML{''}</p>
        <p>CSS{''}</p>
        <p>SwiftUI{''}</p>
        <p>PHP{''}</p>
      </div>
    ),
    frontend: (
      <div className="margin-left--sm margin-right--sm">
        <h1>Frontend</h1>
        <p>Bootstrap{''}</p>
        <p>Tailwind CSS{''}</p>
        <p>ReactJS{''}</p>
        <p>Docusaurus{''}</p>
      </div>
    ),
    backend: (
      <div className="margin-left--sm margin-right--sm">
        <h1>Backend</h1>
        <p>Node.js{''}</p>
        <p>CodeIgniter{''}</p>
      </div>
    ),
    tools: (
      <div className="margin-left--sm margin-right--sm">
        <h1>Tools and Documentation</h1>
        <p>VSCode{''}</p>
        <p>Github{''}</p>
        <p>Gitlab{''}</p>
        <p>Figma{''}</p>
      </div>
    ),
    infrastructure: (
      <div className="margin-left--sm margin-right--sm">
        <h1>Infrastructure</h1>
        <p>Netlify{''}</p>
        <p>Vercel{''}</p>
      </div>
    ),
    learning: (
      <div className="margin-left--sm margin-right--sm">
        <h1>Currently learning</h1>
        <p>Flutter{''}</p>
      </div>
    ),
  },
];

function Profiles({
  imageUrl,
  p1,
  p2,
  p3,
  p4,
  language,
  frontend,
  backend,
  tools,
  infrastructure,
  learning,
}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--12')}>
      <div className="card margin--md shadow--md">
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
            <div className="col col--6">{language}</div>
            <div className="col col--6">{frontend}</div>
            <div className="col col--6">{backend}</div>
            <div className="col col--6">{tools}</div>
            <div className="col col--6">{infrastructure}</div>
            <div className="col col--6">{learning}</div>
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
                {profiles.map(
                  ({
                    imageUrl,
                    p1,
                    p2,
                    p3,
                    p4,
                    language,
                    frontend,
                    backend,
                    tools,
                    infrastructure,
                    learning,
                  }) => (
                    <Profiles
                      imageUrl={imageUrl}
                      p1={p1}
                      p2={p2}
                      p3={p3}
                      p4={p4}
                      language={language}
                      frontend={frontend}
                      backend={backend}
                      tools={tools}
                      infrastructure={infrastructure}
                      learning={learning}
                    />
                  ),
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default About;

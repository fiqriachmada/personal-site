import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const indexes = [
  {
    imageUrl: 'img/profile.svg',
    title: (
      <h1 className="avatar avatar--vertical">
        Hello World! My Name's Achmada Fiqri
      </h1>
    ),
    p1: (
      <p className="avatar avatar--vertical">
        Student at ITATS, sometimes doing code, Mobile Legends and Basketball
        with ❤️. Currently based on Surabaya, Indonesia
      </p>
    ),
    p2: (
      <p2 className="avatar avatar--vertical">
        Reach me via email at
        <a href="mailto:achmada1998@gmail.com">achmada1998@gmail.com</a>
      </p2>
    ),
  },
];

function Indexes({imageUrl, title, p1, p2}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="margin--md">
      {imgUrl && (
        <div className="text--center">
          <a href="about">
            <img src={imgUrl} alt={title} loading="lazy"/>
          </a>
        </div>
      )}
      <div className="">
        <h1 className="index">{title}</h1>
        <p className="index margin-left--sm margin-right--sm">{p1}</p>
        <p2 className="index margin-left--sm margin-right--sm margin-top--lg">{p2}</p2>
      </div>
    </div>
  );
}

function Home() {
  const judul = 'Home';
  return (
    <Layout title={judul}>
      <main>
        {indexes && indexes.length > 0 && (
          <section className={styles.indexes}>
            <div className="container">
              <div className="card row margin--md avatar avatar--vertical">
                {indexes.map(({imageUrl, title, p1, p2}) => (
                  <Indexes
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    p1={p1}
                    p2={p2}
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
export default Home;

import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Link} from 'react-router-dom';

const indexes = [
  {
    imageUrl: 'img/profile.svg',
    title: <h1 className="index avatar avatar--vertical">Hi! I'm Mada</h1>,
    p1: (
      <p className="p1 margin-left--sm margin-right--sm avatar avatar--vertical">
        Front End Developer at PT Gudang Segar Indonesia
        <a href="https://freshfactory.id/">(Fresh Factory)</a>
        and Student at ITATS. Sometimes doing code, Mobile Legends and
        Basketball with ❤️. Currently based on Jakarta, Indonesia
      </p>
    ),
    p2: (
      <p className="p2 margin-left--sm margin-right--sm avatar avatar--vertical">
        Reach me via email at
        <a href="mailto:achmada1998@gmail.com">achmada1998@gmail.com</a>
      </p>
    ),
  },
];

function Indexes({imageUrl, title, p1, p2}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div>
      {imgUrl && (
        <div className="text--center">
          <Link to="about">
            <img className={styles.indexesImage} src={imgUrl} loading="lazy" />
          </Link>
        </div>
      )}
      <div>
        <h1>{title}</h1>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
}

function Home() {
  const title = 'Home';
  return (
    <Layout title={title}>
      <meta
        name="google-site-verification"
        content="76SU0ryrVXar0KxIJXZ3pdvVbgfX-83dtBk2DBAlR0c"
      />
      <main>
        {indexes && indexes.length > 0 && (
          <section className={styles.indexes}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card  margin-bottom--md margin-top--md avatar avatar--vertical shadow--md">
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
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
export default Home;

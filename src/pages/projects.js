import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import featuresProject from './featuredProject';

function Projects() {
  const title = 'Projects';

  return (
    <Layout title={title}>
      <div className="container">
        <div className="row">
          {featuresProject.map((featuresProject) => (
            <div className="col col--6">
              <div className="col-demo">
                <div className="card shadow--md margin-top--md margin-bottom--md">
                  <div>
                    <img
                      style={{
                        height: '420px',
                        objectFit: 'contain',
                      }}
                      src={featuresProject.imageUrl}
                    />
                  </div>
                  <div className="margin--md">
                    <a href={featuresProject.link}>{featuresProject.title}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;

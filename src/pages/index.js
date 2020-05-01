import React, { useState, useEffect } from 'react';
import ExternalLink from '../components/ExternalLink';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  // Querying data client-side with fetch
  const [starsCount, setStarsCount] = useState(0);
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setStarsCount(resultData.stargazers_count);
      }); // set data for the number of stars
  }, []);

  return (
    <Layout>
      <SEO title="Accueil" />
      <h1>Blog,</h1>
      <p>
        Code source et exemple des articles :{' '}
        <ExternalLink href="https://github.com/clodus?tab=repositories">
          https://github.com/clodus?tab=repositories
        </ExternalLink>
      </p>
    </Layout>
  );
};
export default IndexPage;

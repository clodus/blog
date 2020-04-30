import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Remerciement</h1>
    <p>
      J&apos;ai passé une excellente soirée et je tenais à te remercier. Pour l&apos;organisation et l&apos;ambiance, tu
      es champion(ne) et tes amis sont très sympas. On remets ça quand tu veux !
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

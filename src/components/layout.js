/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ExternalLink from './ExternalLink';
import Bio from '../components/bio';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Bio />
          <ExternalLink href="https://ko-fi.com/Y8Y01O3CA">
            <img
              style={{ border: '0px', height: '36px', border: 0, height: '36px' }}
              src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </ExternalLink>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

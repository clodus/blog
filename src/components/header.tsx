import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

type Keys = 'siteTitle' | 'image';

type HeaderProps = {
  [key in Keys]: string;
};

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <div className="py-5 text-center">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img className="d-block mx-auto mb-4" src={`logo.png`} alt="Claude Traglia - Blog" />
        </Link>
        <h1>{siteTitle}</h1>
        <p className="lead">
          Consultant technique spécialisé dans le web, je travaille principalement avec Python et JavaScript depuis 10
          ans. Ici ça parle de web, de dev... et de tout ce que j'ai envie de parler en fait.
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

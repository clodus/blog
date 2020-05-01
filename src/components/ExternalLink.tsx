import React from 'react';

interface ExternalLinkProps {
  className?: string;
  href: string;
  target?: '_blank';
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, className, href, target }) => {
  return (
    <a className={className} href={href} target={target} rel="noopener noreferrer">
      <span>{children}</span>
      <span className="material-icons" style={{ opacity: 0.5, fontSize: '16px' }}>
        launch
      </span>
    </a>
  );
};

ExternalLink.defaultProps = {
  target: '_blank',
};

export default ExternalLink;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './styles/index.scss';

const Header = () => (
  <div>
    <div className="top-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
      <div className="top-bar-left">
        <ul className="menu">
          <Link to="/" className="menu-text logo">
            Alec Jandorek
          </Link>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alec Jandorek"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Helmet>
      <script async>
        {(function(s, u, m, o, j, v) {
          j = u.createElement(m);
          v = u.getElementsByTagName(m)[0];
          j.async = 1;
          j.src = o;
          j.dataset.sumoSiteId = '9fef5e2dd604421ac345b6ec2b471c842f55a7b59193a11ec7212f2096fcbb3b';
          v.parentNode.insertBefore(j, v);
        })(window, document, 'script', '//load.sumo.com/')}
      </script>
    </Helmet>
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

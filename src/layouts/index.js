import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

import Header from '../components/header';
import './index.css';

const Layout = ({ children }) => (
  <div>

    <Header />

    {children()}

  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import reset from 'styled-reset';
import GlobalStyle from '../components/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

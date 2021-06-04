import React from 'react';
// import PropTypes from 'prop-types';
import Navigation from '../Navigation'
import styles from './Layout.module.scss';

const Layout = props => {
  console.log('[Layout]: component rendering...');
  return (
    <>
      <Navigation />
      <main className={styles.Main}>
        {props.children}
      </main>
    </>
  );
};

// Layout.propTypes = {};

export default Layout;

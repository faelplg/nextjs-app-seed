import React from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const logoSettings = [
  {
    layout: "logo",
    width: 80,
    height: 80
  },
  {
    layout: "logo-sm",
    width: 40,
    height: 40
  },
  {
    layout: "logo-vertical",
    width: 260,
    height: 176
  },
  {
    layout: "logo-horizontal",
    width: 160,
    height: 40
  },
  {
    layout: "display",
    width: 104,
    height: 104
  }
];

const Logo = ({ layout, lightSrc, darkMode, darkSrc }) => {
  console.log('[Logo]: component rendering...');
  console.log('[Logo]: lightSrc', lightSrc);
  const {width: logoWidth, height: logoHeight} = logoSettings.reduce((acc, curr) => curr.layout == layout ? curr : acc);
  const logoSrc = darkMode ? darkSrc : lightSrc;
  return <Image src={logoSrc} className={styles.Logo} alt="Logomarca da empresa." width={logoWidth} height={logoHeight} />;
};

Logo.propTypes = {
  layout: PropTypes.string,
  lightSrc: PropTypes.string,
  darkMode: PropTypes.bool,
  darkSrc: PropTypes.string
};

Logo.defaultProps = {
  layout: "default",
  lightSrc: null,
  darkMode: false,
  darkSrc: null
};

export default Logo;
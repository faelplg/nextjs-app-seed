import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './DisplayButton.module.scss';

const DisplayButton = ({ onLinkClick, href, buttonText, darkMode, reverse, warning }) => {
  console.log('[DisplayButton]: component rendering...');
  const handleLinkClick = () => {
    onLinkClick();
  };
  return (
    <Link href={href}>
      <a
        className={[
          styles.Card, darkMode ? styles.Dark : null,
          reverse ? styles.Reverse : null,
          warning ? styles.Warning : null].join(' ')}
        onClick={handleLinkClick}  
          >
        {warning && <span className={styles.Card__ArrowLeft}>&laquo;</span>}
        <h3 className={['text--body', reverse ? styles.Card__TextRight : styles.Card__TextLeft].join(' ')}>{buttonText}</h3>
        {!warning && <span className={styles.Card__ArrowRight}>&raquo;</span>}
      </a>
    </Link>
  );
};

DisplayButton.propTypes = {
  onLinkClick: PropTypes.func,
  href: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  reverse: PropTypes.bool,
  warning: PropTypes.bool,
};

DisplayButton.defaultProps = {
  onLinkClick: () => {},
  href: '',
  darkMode: false,
  reverse: false,
  warning: false,
};

export default DisplayButton;

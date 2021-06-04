import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DarkModeContext } from '../../contexts/darkMode.context';
import styles from './Button.module.scss';

const Button = ({
  type, children, ...props
}) => {
  console.log('[Button]: component rendering...');
  const { darkMode } = useContext(DarkModeContext);
  const { Button: ButtonClass, Submit: SubmitClass, Dark } = styles;
  const className = ButtonClass;
  let button;
  switch (type) {
    case 'submit':
      button = (
        <button type="submit" className={`${className} ${SubmitClass} ${darkMode ? Dark : ''}`} {...props}>
          {children}
        </button>
      );
      break;

    default:
      button = (
        <button type="button" className={`${className} ${darkMode ? Dark : ''}`} {...props}>
          {children}
        </button>
      );
      break;
  }
  return button;
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
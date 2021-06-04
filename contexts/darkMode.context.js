import React from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = React.createContext();
const DarkModeProvider = DarkModeContext.Provider;

const DarkModeCtxComponent = ({ ctxValue, children }) => (
  <DarkModeProvider value={ctxValue}>{children}</DarkModeProvider>
);

DarkModeCtxComponent.propTypes = {
  ctxValue: PropTypes.shape({
    darkMode: PropTypes.bool,
    setDarkMode: () => {}
  }).isRequired,
  children: PropTypes.node.isRequired
};

export { DarkModeContext, DarkModeCtxComponent };
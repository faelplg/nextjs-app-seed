import React from 'react';
import PropTypes from 'prop-types';

const LoaderContext = React.createContext();
const LoaderProvider = LoaderContext.Provider;

const LoaderCtxComponent = ({ ctxValue, children }) => (
  <LoaderProvider value={ctxValue}>{children}</LoaderProvider>
);

LoaderCtxComponent.propTypes = {
  ctxValue: PropTypes.shape({
    heavyLoading: PropTypes.bool,
    setHeavyLoading: () => {},
    appLoading: PropTypes.bool,
    setAppLoading: () => {}
  }).isRequired,
  children: PropTypes.node.isRequired
};

export { LoaderContext, LoaderCtxComponent };
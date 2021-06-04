import React from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();
const AppProvider = AppContext.Provider;

const AppCtxComponent = ({ctxValue, children}) => (
  <AppProvider value={ctxValue}>{children}</AppProvider>
);

AppCtxComponent.propTypes = {
  ctxValue: PropTypes.shape({
    user: PropTypes.object,
    setUser: () => {},
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export {AppContext, AppCtxComponent};

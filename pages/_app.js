/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import Router from 'next/router';
import {ThemeProvider} from '@emotion/react';
import styled from '@emotion/styled';
import {theme} from '../styles/theme.styled';
import {LoaderCtxComponent} from '../contexts/loader.context';
import {DarkModeCtxComponent} from '../contexts/darkMode.context';
import {AppCtxComponent} from '../contexts/app.context';
import {isAuthenticated, authorize, logout} from '../services/authentication.service';
import '../styles/base.scss';

/**
 * Local styled
 */
const Wrapper = styled.div`
  height: 100%;
`;

function CococoinWallet({Component, pageProps}) {
  console.log('%c[_app]: rendering...', 'color: #FF6CB1; background: #222; padding: 8px;');
  const [heavyLoading, setHeavyLoading] = useState(true);
  const [appLoading, setAppLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log('[_app]: isAuthenticated()', isAuthenticated());
    if (isAuthenticated()) {
      // HACK: authenticate the token on the server and place set user object
      authorize()
        .then((res) => {
          console.log('[_app]: authorization res', res);
          setUser(res.data);
          setAppLoading(false);
        })
        .catch((err) => {
          console.log('[_app]: authorization error - ', err);
          logout()
            .then(() => {
              setUser(null);
              setHeavyLoading(false);
              Router.reload();
            })
            .catch(() => {
              setHeavyLoading(false);
              Router.reload();
            });
          setAppLoading(false);
        });
    } else {
      setAppLoading(false);
    }

    setHeavyLoading(false);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <LoaderCtxComponent ctxValue={{heavyLoading, setHeavyLoading, appLoading, setAppLoading}}>
        <DarkModeCtxComponent ctxValue={{darkMode, setDarkMode}}>
          <AppCtxComponent ctxValue={{user, setUser}}>
            <Wrapper>{!heavyLoading && <Component {...pageProps} />}</Wrapper>
          </AppCtxComponent>
        </DarkModeCtxComponent>
      </LoaderCtxComponent>
    </ThemeProvider>
  );
}

export default CococoinWallet;

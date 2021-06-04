import {useContext, useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {DarkModeContext} from '../contexts/darkMode.context';
import {LoaderContext} from '../contexts/loader.context';
import {AppContext} from '../contexts/app.context';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import DisplayButton from '../components/DisplayButton';
import {theme, Surface, LinkA} from '../styles/theme.styled';
import {logout} from '../services/authentication.service';

/**
 * Local styled
 */
const Container = styled(Surface)`
  height: calc(100% - ${theme.sizes.footerSize}) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;
const Footer = styled(Surface)`
  height: ${theme.sizes.footerSize};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  console.log('[Home]: rendering...');
  const {darkMode} = useContext(DarkModeContext);
  const {setHeavyLoading, appLoading} = useContext(LoaderContext);
  const {user, setUser} = useContext(AppContext);
  const logo = darkMode ? '/logo-vertical-dark.png' : '/logo-vertical.png';

  const handleLogout = async () => {
    console.log('[Home]: handling logout...');
    setHeavyLoading(true);
    await logout()
      .then(() => {
        setUser(null);
        setHeavyLoading(false);
        Router.reload();
      })
      .catch(() => {
        setHeavyLoading(false);
        Router.reload();
      });
  };

  useEffect(() => {
    console.log('%c[Home]: effect triggered', 'color: #b8e5fa; background: #222; padding: 8px;');
    console.log('[Home]: useEffect - user', user);
  }, []);

  return (
    <>
      <Head>
        <title>Cococoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout type="with-navbar">
        <Container bgDark={darkMode} full>
          <Logo lightSrc={logo} layout="logo-vertical" />
          <code style={{marginTop: '1.6rem'}}>Technology, activism, and ocean conservation</code>
          <CardsContainer>
            {!appLoading && user && (
              <DisplayButton href="/wallet" buttonText="Wallet" darkMode={darkMode} />
            )}
            {!appLoading && user && (
              <DisplayButton href="/account" buttonText="Account" darkMode={darkMode} />
            )}
            {!appLoading && !user && (
              <DisplayButton href="/login" buttonText="Login" darkMode={darkMode} />
            )}
            {!appLoading && !user && (
              <DisplayButton href="/register" buttonText="Register" darkMode={darkMode} />
            )}
            {!appLoading && user && (
              <DisplayButton
                buttonText="Logout"
                darkMode={darkMode}
                onLinkClick={handleLogout}
                reverse
                warning
              />
            )}
          </CardsContainer>
        </Container>
        <Footer bgDisplayDark={darkMode} bgLight={!darkMode}>
          <footer>
            <p>
              Powered by{' '}
              <LinkA
                darkMode={darkMode}
                href="https://www.facebook.com/opiorblocodomundo"
                target="_blank"
                rel="noopener noreferrer"
              >
                O Pior Bloco do Mundo
              </LinkA>
            </p>
          </footer>
        </Footer>
      </Layout>
    </>
  );
}

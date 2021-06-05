import {useContext} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {AppContext} from '../../contexts/app.context';
import {DarkModeContext} from '../../contexts/darkMode.context';
import {LoaderContext} from '../../contexts/loader.context';
import Layout from '../../components/Layout';
import {Surface} from '../../styles/theme.styled';
import FormLogin from '../../components/Form/FormLogin';
import styles from './Login.module.scss';
import {login, isAuthenticated, logout} from '../../services/authentication.service';

const Login = () => {
  console.log('%c[Login]: page rendering...', 'color: #b8e5fa; background: #222; padding: 8px;');
  const {darkMode} = useContext(DarkModeContext);
  const {setUser} = useContext(AppContext);
  const {setHeavyLoading} = useContext(LoaderContext);

  const handleFormSubmit = async ({identifier, password}) => {
    setHeavyLoading(true);
    if (isAuthenticated) await logout();
    await login(identifier, password)
      .then((res) => {
        console.log('[Login]: res', res);
        setUser(res.data.user);
        setHeavyLoading(false);
        // redirect back to home page for restaurance selection
        Router.push('/');
      })
      .catch((err) => {
        console.log('[Login]: err', err);
        setHeavyLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>fael.tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Surface flex bgDark={darkMode} alignCenter justifyCenter full>
          <Surface
            flex
            column
            bgDisplayDark={darkMode}
            bgLight={!darkMode}
            className={styles.Login}
            round
            shadow
          >
            <h1>Login</h1>
            <FormLogin dark={darkMode} formSubmit={handleFormSubmit} />
          </Surface>
        </Surface>
      </Layout>
    </>
  );
};

export default Login;

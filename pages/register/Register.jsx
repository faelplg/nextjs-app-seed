import {useContext} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {AppContext} from '../../contexts/app.context';
import {DarkModeContext} from '../../contexts/darkMode.context';
import {LoaderContext} from '../../contexts/loader.context';
import Layout from '../../components/Layout';
import {Surface} from '../../styles/theme.styled';
import Form from '../../components/Form';
import styles from './Register.module.scss';
import {login, isAuthenticated, logout} from '../../services/authentication.service';

const Register = () => {
  console.log('%c[Register]: page rendering...', 'color: #b8e5fa; background: #222; padding: 8px;');
  const {darkMode} = useContext(DarkModeContext);
  const {setUser} = useContext(AppContext);
  const {setHeavyLoading} = useContext(LoaderContext);

  const handleFormSubmit = async ({identifier, password}) => {
    setHeavyLoading(true);
    if (isAuthenticated) await logout();
    await login(identifier, password)
      .then((res) => {
        console.log('[Register]: res', res);
        setUser(res.data.user);
        setHeavyLoading(false);
        // redirect back to home page for restaurance selection
        Router.push('/');
      })
      .catch((err) => {
        console.log('[Register]: err', err);
        setHeavyLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Cococoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Surface flex bgDisplay={darkMode} alignCenter justifyCenter full>
          <Surface
            flex
            column
            bgDark={darkMode}
            bgLight={!darkMode}
            className={styles.Register}
            round
            shadow
          >
            <h1>Register</h1>
            <Form dark={darkMode} formSubmit={handleFormSubmit} />
          </Surface>
        </Surface>
      </Layout>
    </>
  );
};

export default Register;

import {useContext} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {AppContext} from '../../contexts/app.context';
import {DarkModeContext} from '../../contexts/darkMode.context';
import {LoaderContext} from '../../contexts/loader.context';
import Layout from '../../components/Layout';
import {Surface} from '../../styles/theme.styled';
import FormRegister from '../../components/Form/FormRegister';
import styles from './Register.module.scss';
import {registerUser, isAuthenticated, logout} from '../../services/authentication.service';

const Register = () => {
  console.log('%c[Register]: page rendering...', 'color: #b8e5fa; background: #222; padding: 8px;');
  const {darkMode} = useContext(DarkModeContext);
  const {setUser} = useContext(AppContext);
  const {setHeavyLoading} = useContext(LoaderContext);

  const handleFormSubmit = async ({username, email, password}) => {
    setHeavyLoading(true);
    if (isAuthenticated) await logout();
    await registerUser(username, email, password)
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
            className={styles.Register}
            round
            shadow
          >
            <h1>Register</h1>
            <FormRegister dark={darkMode} formSubmit={handleFormSubmit} />
          </Surface>
        </Surface>
      </Layout>
    </>
  );
};

export default Register;

import React, { useContext } from 'react';
import Link from 'next/link';
import Button from '../Button';
import Logo from '../Logo';
import {
  Surface, Box, Nav, Ul
} from '../../styles/theme.styled';
import { DarkModeContext } from '../../contexts/darkMode.context';
import styles from './Navigation.module.scss';
import { LinkA } from '../../styles/theme.styled';

const Navigation = () => {
  console.log('[Navigation]: component rendering...');
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <Surface className={styles.NavigationSurface} bgDark={darkMode} bgLight={!darkMode}>
      <Nav flex className={styles.Navigation} shadow>
        <Box grow flex>
          <Logo layout="logo-sm" lightSrc="/logo-sm.png" darkMode={darkMode} darkSrc="/logo-sm-dark.png" />
        </Box>
        <Ul>
          <li>
            <Link href="/">
              <LinkA darkMode={darkMode}>Home</LinkA>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <LinkA darkMode={darkMode}>Login</LinkA>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <LinkA darkMode={darkMode}>Register</LinkA>
            </Link>
          </li>
        </Ul>
        <Button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"} mode</Button>
      </Nav>
    </Surface>
  );
};

export default Navigation;
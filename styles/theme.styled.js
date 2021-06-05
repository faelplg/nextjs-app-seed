import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

/**
 * Theme settings
 */
export const theme = {
  colors: {
    primary: '#1E0B36',
    primaryLight: '#755B8E',
    primaryDark: '#483160',
    secondary: '#CA3782',
    secondaryLight: '#FF6CB1',
    secondaryDark: '#950056',
    background: '#ECE0E8',
    backgroundLight: '#F5F5F6',
    backgroundDark: '#222222',
    backgroundDisplay: '#E1E2E1',
    backgroundDisplayDark: '#1b1b1b',
    complementary1: '#25b664',
    complementary1Dark: '#187641',
    complementary1Darkest: '#0b361e',
    complementary2: '#37cac9',
    complementary2Dark: '#268f8e',
    complementary2Darkest: '#165352',
    statusNormal: '#2196f3',
    statusWarning: '#ef5350',
    font: '#230A1B',
    fontDisplay: '#888888',
    fontLight: '#ffffff',
  },
  sizes: {
    navbarSize: '7.2rem',
    footerSize: '8rem',
  },
  spacing: {
    xs: '0.8rem',
    sm: '1.6rem',
    md: '3.2rem',
    lg: '6.4rem',
    xl: '12.8rem',
  },
};

/**
 * Surfaces
 */
export const Surface = styled.div`
  ${({
    bgLight,
    bgDark,
    bgDisplay,
    bgDisplayDark,
    bgDisplayDark1,
    bgDisplayDark2,
    column,
    flex,
    alignCenter,
    justifyCenter,
    full,
    round,
    shadow,
    transparent,
    wrap,
  }) => `
    background-color: ${theme.colors.background};
    color: ${theme.colors.font};
    ${
      round
        ? `
      border-radius: 4px;
    `
        : ''
    }
    ${
      flex
        ? `
      display:flex;
      flex-flow: ${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'};
    `
        : ''
    }
    ${alignCenter ? `align-items: center;` : ''}
    ${justifyCenter ? `justify-content: center;` : ''}
    ${
      full
        ? `
      height: 100%;
      width: 100%;
    `
        : ''
    }
    ${bgLight ? `background-color: ${theme.colors.backgroundLight};` : ''}
    ${
      bgDark
        ? `
      background-color: ${theme.colors.backgroundDark};
      color: ${theme.colors.fontLight};
    `
        : ''
    }
    ${
      bgDisplay
      ? `
      background-color: ${theme.colors.backgroundDisplay};
      `
      : ''
    }
    ${
      bgDisplayDark
        ? `
      background-color: ${theme.colors.backgroundDisplayDark};
      color: ${theme.colors.fontLight};
    `
        : ''
    }
    ${
      bgDisplayDark1
        ? `
      background-color: ${theme.colors.complementary1Darkest};
      color: ${theme.colors.fontLight};
    `
        : ''
    }
    ${
      bgDisplayDark2
        ? `
      background-color: ${theme.colors.complementary2Darkest};
      color: ${theme.colors.fontLight};
    `
        : ''
    }
    ${transparent ? 'background-color: transparent;' : ''}
    ${shadow ? 'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);' : ''}
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  `}
`;

/**
 * Flex display
 */
export const Flex = styled.div`
  ${({wrap, column}) => `
    display: flex;
    flex-flow: ${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}
  `}
`;

/**
 * Box element
 */
export const Box = styled.div`
  ${({grow, flex, column, wrap}) => `
    flex: ${grow ? '1' : '0'} 1 auto;
    ${
      flex &&
      `
      display: flex;
      flex-flow: ${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}
    `
    }
  `}
`;

/**
 * Nav element
 */
export const Nav = styled.nav`
  ${({wrap, flex, column}) => `
    ${
      flex &&
      `
      display: flex;
      flex-flow: ${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}
    `
    }
  `};
`;

/**
 * Ul element
 */
export const Ul = styled.ul`
  ${({wrap, flex, column}) => `
    ${
      flex &&
      `
      display: flex;
      flex-flow: ${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}
    `
    }
  `};
`;

/**
 * Normal Links
 */

export const LinkA = styled.a`
  ${({theme, active, darkMode}) => `
    cursor: pointer;
    color: ${darkMode ? theme.colors.secondary : theme.colors.primaryDark};
    transition: color 0.3s ease-in-out;
    ${
      active ? `color: ${darkMode ? theme.colors.secondaryDark : theme.colors.primary};` : ''
    }
    &:hover {
      color: ${darkMode ? theme.colors.secondaryLight : theme.colors.primaryLight};
    }
    &:focus {
      outline: transparent;
      text-decoration: underline solid ${
        darkMode ? theme.colors.secondaryLight : theme.colors.primaryLight
      };
      text-underline-position: under;
    }
  `}
`;

/**
 * Spinner
 */
const spin = keyframes`
  to { 
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
  ${({darkMode}) => `
    border: 3px solid ${darkMode ? 'rgba(255,255,255,.3)' : 'rgba(0,0,0,.4)'};
    border-top-color: ${darkMode ? '#fff' : '#000'};
  `}
`;

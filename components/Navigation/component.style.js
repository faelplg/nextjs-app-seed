import styled from '@emotion/styled';

export const NavigationLink = styled.a`
  ${({ theme, active, darkMode }) => `
    cursor: pointer;
    color: ${darkMode ? theme.colors.secondary : theme.colors.primaryDark};
    transition: color 0.3s ease-in-out;
    ${active ? `color: ${darkMode ? theme.colors.secondaryDark : theme.colors.primary};` : ''}
    &:hover {
      color: ${darkMode ? theme.colors.secondaryLight: theme.colors.primaryLight};
    }
    &:focus {
      outline: transparent;
      text-decoration: underline solid ${darkMode ? theme.colors.secondaryLight : theme.colors.primaryLight};
      text-underline-position: under;
    }
  `}
`;
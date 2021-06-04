// import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const FormError = styled.div`
  ${({ theme }) => `
    height: 2.8rem;
    color: ${theme.colors.statusWarning};
  `}
`;
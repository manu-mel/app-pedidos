import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

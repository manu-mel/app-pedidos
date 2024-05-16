import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonElement = styled.TouchableOpacity`
  width: 90%;
  height: 40px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundButton};
`;

export const Label = styled.Text`
  font-size: 19px;
  text-align: center;
  color: ${({ theme }) => theme.colors.labelButton};
`;

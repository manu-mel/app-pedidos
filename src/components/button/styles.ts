import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonElement = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  border-radius: 10px;
  width: 90%;
  height: 40px;
  padding: 5px;
  margin: 10px;
`;

export const Label = styled.Text`
  font-size: 19px;
  text-align: center;
  color: ${({ theme }) => theme.colors.labelButton};
`;

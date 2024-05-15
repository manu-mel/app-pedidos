import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  height: 65px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 18px;
  width: 100%;
  color: ${({ theme }) => theme.colors.labelInput};
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: 36px;
  font-size: 16px;
  padding: 0 5px;
  border: 1px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderInput};
`;

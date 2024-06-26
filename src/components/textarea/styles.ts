import styled from 'styled-components/native';

interface Props {
  numberOfLines: number;
}

export const Container = styled.View<Props>`
  align-items: center;
  width: 100%;
  height: ${({ numberOfLines }) => numberOfLines * 65}px;
`;

export const Label = styled.Text`
  font-size: 18px;
  width: 100%;
  color: ${({ theme }) => theme.colors.labelInput};
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 20px;
`;

export const InputText = styled.TextInput<Props>`
  width: 100%;
  font-size: 16px;
  padding: 0 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  height: ${({ numberOfLines }) => (numberOfLines + 0.8) * 36}px;
  color: ${({ theme }) => theme.colors.labelInput};
`;

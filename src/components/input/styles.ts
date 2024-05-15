import styled from 'styled-components/native';

interface Props {
  textarea?: boolean;
}

export const Container = styled.View<Props>`
  align-items: center;
  width: 100%;
  height: 65px;
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
  border: 1px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderInput};
  height: 36px;
`;

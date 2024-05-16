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
  height: 36px;
  font-size: 16px;
  padding: 0 5px;
  box-shadow: 0px 1px 3px #0000005a;
  border-color: #727272;
  elevation: 3;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.borderInput};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
`;

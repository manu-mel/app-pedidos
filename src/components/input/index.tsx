import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContainer, InputText, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
}
const Input = ({ label, ...rest }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer {...rest}>
        <InputText />
      </InputContainer>
    </Container>
  );
};

export default Input;

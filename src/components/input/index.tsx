import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContainer, InputText, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <Container>
      <InputContainer {...rest}>
        <Label>{label}</Label>
        <InputText {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;

import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContainer, InputText, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  line: number;
}

const TextArea = ({ label, line, ...rest }: InputProps) => {
  return (
    <Container numberOfLines={line}>
      <InputContainer {...rest}>
        <Label>{label}</Label>
        <InputText multiline numberOfLines={line} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default TextArea;

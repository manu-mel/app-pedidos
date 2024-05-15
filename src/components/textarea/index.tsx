import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputContainer, InputText, Label } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  lines: number;
}

const TextArea = ({ label, lines, ...rest }: InputProps) => {
  return (
    <Container numberOfLines={lines}>
      <InputContainer {...rest}>
        <Label>{label}</Label>
        <InputText multiline numberOfLines={lines} />
      </InputContainer>
    </Container>
  );
};

export default TextArea;

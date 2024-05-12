import React from 'react';
import { ButtonElement, Container, Label } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <Container>
      <ButtonElement {...rest}>
        <Label>{label}</Label>
      </ButtonElement>
    </Container>
  );
};

export default Button;

import React, { useState } from 'react';
import { CheckboxElement, Container, ContainerElements, Label } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface CheckboxProps extends TouchableOpacityProps {
  label: string;
}

const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <ContainerElements>
        <CheckboxElement
          onPress={() => setChecked(!checked)}
          checked={checked}
          {...rest}
        />
        <Label>{label}</Label>
      </ContainerElements>
    </Container>
  );
};

export default Checkbox;

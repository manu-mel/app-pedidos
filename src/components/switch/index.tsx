import React from 'react';
import {
  Container,
  Label,
  SwitchComponent,
  ToggleSwitchLeft,
  ToggleSwitchRight,
} from './styles';
import { TouchableOpacityProps } from 'react-native-gesture-handler';

interface Props extends TouchableOpacityProps {
  label: string;
  enable: boolean;
}

const Switch = ({ label, enable, ...rest }: Props) => {
  return (
    <Container>
      <SwitchComponent {...rest} enabled={enable}>
        {enable ? <ToggleSwitchRight /> : <ToggleSwitchLeft />}
      </SwitchComponent>
      <Label>{label}</Label>
    </Container>
  );
};

export default Switch;

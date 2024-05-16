import React, { useState } from 'react';
import { Modal, ModalProps } from 'react-native';
import Button from '../button';
import Input from '../input';
import { Background, Container } from './styles';

interface Props extends ModalProps {
  isVisible: boolean;
  setIsVisible: (a: boolean) => void;
  onItemClick: (a: string) => void;
  itemQty: number;
}

const ModalQty = ({
  isVisible,
  setIsVisible,
  onItemClick,
  itemQty,
  ...rest
}: Props) => {
  const [qty, setQty] = useState(0);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}
      {...rest}>
      <Background>
        <Container>
          <Input
            label="Produto"
            value={String(itemQty)}
            onChangeText={() => setQty(2)}
          />
          <Button
            label="Adicionar"
            onPress={() => {
              setIsVisible(!isVisible);
              onItemClick(String(qty));
            }}
          />
        </Container>
      </Background>
    </Modal>
  );
};

export default ModalQty;

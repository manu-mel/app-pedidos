import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../button';
import Input from '../input';
import {
  Background,
  Container,
  ModalItemContainer,
  ModalItemText,
  ModalItemTouchable,
} from './styles';

interface Props extends ModalProps {
  isVisible: boolean;
  setIsVisible: (a: boolean) => void;
  onItemClick: (a: string) => void;
}

interface IProduct {
  id: number;
  description: string;
}

const ModalFlatList = ({
  isVisible,
  setIsVisible,
  onItemClick,
  ...rest
}: Props) => {
  const products = [
    { id: 1, description: 'Product 1' },
    { id: 2, description: 'Product 2' },
    { id: 3, description: 'Product 3' },
    { id: 4, description: 'Product 4' },
    { id: 5, description: 'Product 5' },
    { id: 6, description: 'Product 6' },
  ];

  const renderProduct = ({ item }: { item: IProduct }) => {
    return (
      <ModalItemContainer>
        <ModalItemTouchable
          onPress={() => {
            setIsVisible(false);
            onItemClick(String(item.id));
          }}>
          <ModalItemText>{item.description}</ModalItemText>
        </ModalItemTouchable>
      </ModalItemContainer>
    );
  };

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
          <Input label="Produto" />
          <FlatList
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: '100%' }}
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => String(item.id)}
          />
          <Button label="Adicionar" onPress={() => setIsVisible(!isVisible)} />
        </Container>
      </Background>
    </Modal>
  );
};

export default ModalFlatList;

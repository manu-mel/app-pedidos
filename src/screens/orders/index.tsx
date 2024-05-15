import React, { useState } from 'react';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import Button from '../../components/button';
import ModalFlatList from '../../components/modalFlatlist';
import {
  Container,
  ContainerNumber,
  ContainerElements,
  ContainerDistrict,
} from './styles';

const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemClick = (id: string) => {
    console.log(id);
  };

  return (
    <Container>
      <Input label="Cliente" />
      <Input label="Rua" />
      <ContainerElements>
        <ContainerDistrict>
          <Input label="Bairro" />
        </ContainerDistrict>
        <ContainerNumber>
          <Input label="Número" />
        </ContainerNumber>
      </ContainerElements>
      <Input label="Complemento" />
      <Checkbox label="Entrega" />
      <Button label="Adicionar Produto" onPress={() => setModalVisible(true)} />
      <ModalFlatList
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        onItemClick={handleItemClick}
      />
    </Container>
  );
};

export default Orders;

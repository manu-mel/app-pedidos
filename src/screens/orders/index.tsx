import React from 'react';
import Input from '../../components/input';
import {
  Container,
  ContainerNumber,
  ContainerElements,
  ContainerDistrict,
} from './styles';
import Checkbox from '../../components/checkbox';

const Orders = () => {
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
      <Input label="Produto" />
      <Checkbox label="Entrega" />
    </Container>
  );
};

export default Orders;

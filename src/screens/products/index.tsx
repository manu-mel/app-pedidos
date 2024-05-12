import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import { Container } from './styles';

const Products = () => {
  return (
    <Container>
      <Input label="Produto" />
      <Input label="Quantidade" />
      <Button label="Gravar" />
    </Container>
  );
};

export default Products;

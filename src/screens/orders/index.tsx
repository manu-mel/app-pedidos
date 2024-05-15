import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import Button from '../../components/button';
import ModalFlatList from '../../components/modalFlatlist';
import {
  Container,
  ContainerNumber,
  ContainerElements,
  ContainerDistrict,
  ModalItemContainer,
  ModalItemTouchable,
  ModalItemText,
} from './styles';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface IProductOrder {
  id: number;
  description: string;
  qty: number;
}

interface IOrder {
  orderId: number;
  customer: string;
  street: string;
  district: string;
  number: string;
  compliment: string;
  delivery: boolean;
  products: Array<IProductOrder>;
}

const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const form = useForm<IOrder>();
  const { control, handleSubmit } = form;

  const productsArray = useFieldArray({
    control: form.control,
    name: 'products',
  });

  const { fields, append } = productsArray;

  const handleItemClick = (item: string) => {
    const product = {
      id: 1,
      qty: 1,
      description: item,
    };

    append(product);
  };

  const handleSubmitOrder = () => {
    try {
      // gravar
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const renderProduct = ({ item }: { item: IProductOrder }) => {
    return (
      <ModalItemContainer>
        <ModalItemTouchable>
          <ModalItemText>{item.description}</ModalItemText>
        </ModalItemTouchable>
      </ModalItemContainer>
    );
  };

  return (
    <Container>
      <Controller
        control={control}
        name="customer"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Cliente"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="street"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Rua"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <ContainerElements>
        <ContainerDistrict>
          <Controller
            control={control}
            name="district"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Bairro"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </ContainerDistrict>
        <ContainerNumber>
          <Controller
            control={control}
            name="number"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Número"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </ContainerNumber>
      </ContainerElements>
      <Controller
        control={control}
        name="compliment"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Complemento"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="district"
        render={({ field: { onChange } }) => (
          <Checkbox label="Entrega" onPress={onChange} />
        )}
      />

      <Button label="Adicionar Produto" onPress={() => setModalVisible(true)} />
      <Button label="Gravar" onPress={handleSubmit(handleSubmitOrder)} />
      <ModalFlatList
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        onItemClick={handleItemClick}
      />
      <FlatList
        data={fields}
        renderItem={renderProduct}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
};

export default Orders;

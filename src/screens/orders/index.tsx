import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Input from '../../components/input';
import Button from '../../components/button';
import ModalFlatList from '../../components/modalFlatlist';
import TextArea from '../../components/textarea';
import Switch from '../../components/switch';
import ModalQty from '../../components/modalQty';
import {
  Container,
  ContainerNumber,
  ContainerElements,
  ContainerDistrict,
  ItemContainer,
  ItemTouchable,
  ItemText,
  ContainerCheckBox,
  ContainerButton,
} from './styles';

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
  complement: string;
  delivery: number;
  observation: string;
  products: Array<IProductOrder>;
}
const formDefault = {
  orderId: 0,
  customer: '',
  street: '',
  district: '',
  number: '',
  complement: '',
  delivery: 0,
  observation: '',
  products: [],
};

const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalQtyVisible, setModalQtyVisible] = useState(false);
  const [checkSwitch, setCheckSwitch] = useState(false);

  const form = useForm<IOrder>();
  const { control, handleSubmit } = form;

  const productsArray = useFieldArray({
    control: form.control,
    name: 'products',
  });

  const { fields, append } = productsArray;

  const handleItemClick = (item: string) => {
    const products = [
      { id: 1, description: 'Product 1' },
      { id: 2, description: 'Product 2' },
      { id: 3, description: 'Product 3' },
      { id: 4, description: 'Product 4' },
      { id: 5, description: 'Product 5' },
      { id: 6, description: 'Product 6' },
    ];

    const index = products.findIndex(
      product => product.id === parseInt(item, 10),
    );

    const newProduct = products[index];

    const appendItem = { qty: 1, ...newProduct };

    append(appendItem);
  };

  const handleSubmitOrder = (order: IOrder) => {
    try {
      const { ...ord } = order;

      form.reset(formDefault);

      setCheckSwitch(!checkSwitch);

      console.log(ord);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const renderProduct = ({ item }: { item: IProductOrder }) => {
    return (
      <>
        <ItemContainer>
          <ItemTouchable onPress={() => setModalQtyVisible(true)}>
            <ItemText>Produto: {item.description}</ItemText>
            <ItemText>Quantidade: {item.qty}</ItemText>
          </ItemTouchable>
        </ItemContainer>

        <ModalQty
          isVisible={modalQtyVisible}
          setIsVisible={setModalQtyVisible}
          onItemClick={handleItemClick}
          itemQty={item.qty}
        />
      </>
    );
  };

  const handlePressSwitch = () => {
    setCheckSwitch(!checkSwitch);

    const valueForm = !checkSwitch ? 1 : 0;

    form.setValue('delivery', valueForm);
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
        name="complement"
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
        name="observation"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextArea
            label="Observação"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            line={2}
          />
        )}
      />
      <ContainerElements>
        <ContainerCheckBox>
          <Controller
            control={control}
            name="delivery"
            render={() => (
              <Switch
                label="Entrega"
                enable={checkSwitch}
                onPress={handlePressSwitch}
              />
            )}
          />
        </ContainerCheckBox>

        <ContainerButton>
          <Button
            label="Adicionar Produto"
            onPress={() => setModalVisible(true)}
          />
        </ContainerButton>
      </ContainerElements>

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

      <View>
        <Button label="Gravar" onPress={handleSubmit(handleSubmitOrder)} />
      </View>
    </Container>
  );
};

export default Orders;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Products from '../../screens/products';
import { AppRoutesProps } from '../../types/routes';
import Orders from '../../screens/orders';

const Drawer = createDrawerNavigator<AppRoutesProps>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Products">
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Produtos',
          headerTitleAlign: 'center',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          title: 'Pedidos',
          headerTitleAlign: 'center',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

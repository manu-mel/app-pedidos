import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Products from '../../screens/products';
import { AppRoutesProps } from '../../types/routes';
import Orders from '../../screens/orders';
import { useTheme } from 'styled-components';

const Drawer = createDrawerNavigator<AppRoutesProps>();

const DrawerNavigation = () => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Orders"
      screenOptions={{
        drawerContentStyle: {
          backgroundColor: theme.colors.drawerBackground,
          opacity: 1,
        },
        drawerActiveTintColor: theme.colors.labelInput,
        drawerActiveBackgroundColor: theme.colors.drawerActive,
        drawerInactiveTintColor: theme.colors.labelInput,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          color: theme.colors.labelInput,
        },
      }}>
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

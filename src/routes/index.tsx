import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigation from './drawer';

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Router;

import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

export const ProductsScreen = () => {
  console.log('ProductsScreen rendered');
  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black'}}>Pantalla de Productos</Text>
    </View>
  );
};
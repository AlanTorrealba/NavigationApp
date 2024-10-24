import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';

export const SettingsScreen = () => {
  return (
    <View style={globalStyles.container }>
      <Text style={{color: 'black'}}>Ajustes</Text>
    </View>
  );
};

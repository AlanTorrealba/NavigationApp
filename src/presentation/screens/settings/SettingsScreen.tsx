import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black'}}>Ajustes</Text>

      <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />
     
      <PrimaryButton label="Volver" onPress={()=> navigator.dispatch(StackActions.popToTop())}/>
    </View>
  );
};

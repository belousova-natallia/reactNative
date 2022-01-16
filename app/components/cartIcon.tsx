import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {styles} from '../screens/mainPage/styles/mainStyles';

export const CartIcon = ({
  navigation,
  style,
}: {
  navigation: any;
  style: any;
}) => {
  return (
    <Icon
      name="shopping-cart"
      size={20}
      color="#fff"
      style={[styles.cart, style]}
      onPress={() => {
        navigation.navigate('My Cart');
      }}
    />
  );
};

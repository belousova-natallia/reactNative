import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles/mainStyles';

export interface ProductItem {
  id: string;
  attributes: ItemInterface;
}

export interface ItemInterface {
  name: string;
  display_price: string;
  id: number;
}

const Item = (item: ItemInterface) => (
  <View style={styles.productItem}>
    <Image
      style={styles.imageStyle}
      source={{
        uri: `https://picsum.photos/id/${item.id}/100.jpg`,
      }}></Image>
    <Text style={{}}>{item.name}</Text>
    <Text style={{color: '#000'}}>{item.display_price}</Text>
  </View>
);
export default Item;

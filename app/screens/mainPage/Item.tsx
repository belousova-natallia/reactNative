import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles/mainStyles';

export interface ProductItem {
  id: string;
  attributes: ItemInterface;
}

export interface ItemInterface {
  name: string;
  display_price: string;
  id: string;
}

const Item = (item: ItemInterface) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.productItem}>
      <Pressable
        onPress={() =>
          navigation.navigate('ProductDetails', {
            id: item.id,
          })
        }>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `https://picsum.photos/id/${item.id}/100.jpg`,
          }}></Image>
        <Text>{item.name}</Text>
        <Text style={{color: '#000'}}>{item.display_price}</Text>
      </Pressable>
    </View>
  );
};
export default Item;

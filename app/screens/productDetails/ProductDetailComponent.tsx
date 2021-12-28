import {Image, ScrollView, Text, RefreshControl, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProductById} from '../../services/productService';
import {productDetailsStyles} from './styles/productDetailsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const mockId = '1';

export const ProductDetailComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState<any>(null);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    loadProductData(mockId);
  }, []);

  const loadProductData = (id: string) => {
    setLoading(true);
    return getProductById(id)
      .then(product => {
        setItem(product);
      })
      .finally(() => setLoading(false));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadProductData(mockId).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {!isLoading ? (
        <View style={productDetailsStyles.productDetails}>
          <View style={productDetailsStyles.productImageSection}>
            <View style={productDetailsStyles.productImage}>
              <Icon name="angle-left" size={25}></Icon>
              <Image
                style={productDetailsStyles.productDetailsImage}
                source={{
                  uri: `https://picsum.photos/id/${item.id}/100.jpg`,
                }}></Image>
              <Icon name="angle-right" size={25}></Icon>
            </View>
            <Icon name="circle" color="lightblue"></Icon>
          </View>
          <View style={productDetailsStyles.productTitlePrice}>
            <Text style={{}}>{item.attributes.name}</Text>
            <Text style={{color: '#000'}}>{item.attributes.display_price}</Text>
          </View>
          <View style={productDetailsStyles.detailsBlock}>
            <Text style={productDetailsStyles.sectionTitle}>Select color</Text>
            <Text style={productDetailsStyles.selectColorOptions}>Blue</Text>
          </View>
          <View style={productDetailsStyles.detailsBlock}>
            <Text style={productDetailsStyles.sectionTitle}>Description</Text>
            <Text>{item.attributes.description}</Text>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

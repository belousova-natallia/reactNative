import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {productDetailsStyles} from './styles/productDetailsStyles';
import {ProductDetailComponent} from './ProductDetailComponent';

const ProductDetailScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const {id} = route.params;
  return (
    <SafeAreaView style={productDetailsStyles.container}>
      <ProductDetailComponent id={id} navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

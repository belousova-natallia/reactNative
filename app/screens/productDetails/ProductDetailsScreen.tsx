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
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ProductDetailComponent id={id} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

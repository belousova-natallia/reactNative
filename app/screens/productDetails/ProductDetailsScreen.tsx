import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../mainPage/styles/mainStyles';
import {productDetailsStyles} from './styles/productDetailsStyles';
import {ProductDetailComponent} from './ProductDetailComponent';

const ProductDetailScreen = () => {
  return (
    <SafeAreaView style={productDetailsStyles.container}>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={styles.menubar}>
          <View
            style={{
              flex: 1,
            }}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          />
          <Icon
            name="heart-o"
            size={20}
            color="#fff"
            style={productDetailsStyles.headerIcon}
          />
          <Icon name="shopping-basket" size={20} color="#fff" />
        </View>

        <ProductDetailComponent />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

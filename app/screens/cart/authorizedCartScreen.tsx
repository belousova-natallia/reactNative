import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {ProductContext} from '../../../index';
import {productDetailsStyles} from '../productDetails/styles/productDetailsStyles';

const AuthorizedCartScreen = ({navigation}: {navigation: any}) => {
  const {productsInCart} = React.useContext(ProductContext);
  const {removeOneFromCart} = React.useContext(ProductContext);
  const {addToCart} = React.useContext(ProductContext);
  const {deleteFromCart} = React.useContext(ProductContext);

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.productItem}>
      <Image
        style={{width: 100, height: 100, marginRight: 50}}
        source={{
          uri: `https://picsum.photos/id/${item.id}/100.jpg`,
        }}></Image>

      <View>
        <Text style={{color: '#000'}}>{item.attributes.name}</Text>
        <Text>Color: Blue</Text>
        <Text>{item.attributes.display_price}</Text>
        <View style={styles.changeQuantityGroup}>
          <View style={styles.changeQuantity}>
            <Pressable
              style={styles.decreaseQuantityButton}
              onPress={() => {
                removeOneFromCart(item);
                //setProducts(getProductsInCart());
              }}>
              <Text>-</Text>
            </Pressable>
            <Text style={styles.changeQuantityText}>
              {productsInCart.filter((el: any) => el.id === item.id).length}
            </Text>
            <Pressable
              style={styles.increaseQuantityButton}
              onPress={() => {
                addToCart(item);
              }}>
              <Text>+</Text>
            </Pressable>
          </View>
          <Icon
            name="trash"
            size={18}
            color="#999"
            onPress={() => {
              deleteFromCart(item);
            }}
            style={styles.trash}
          />
        </View>
      </View>
    </View>
  );

  const renderFooter = () => {
    return (
      <>
        <View style={styles.priceDetails}>
          <Text style={styles.priceDetailsTitle}>Price details</Text>
          <Text>{`Price (${productsInCart.length} item)`}</Text>
          <Text>Delivery</Text>
          <Text>Discount</Text>
          <Text>Tax (2%)</Text>
          <View style={styles.priceDetailsGroup}>
            <Text>Amount Payable</Text>
            <Text>
              {productsInCart.reduce((acc: number, el: any) => {
                return acc + +el.attributes.price;
              }, 0)}
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('LoginToContinueModal');
          }}>
          <Text style={productDetailsStyles.textStyle}>Proceed to payment</Text>
        </Pressable>
      </>
    );
  };

  return (
    <>
      {!productsInCart.length ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Icon
              name="smile-o"
              size={180}
              color="#008ACE"
              style={styles.img}
            />
            <Text style={styles.cartTitle}>Your Cart is Empty!</Text>
            <Text>Add product in your cart now</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.textStyle}>Shop now</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <View>
            <FlatList
              keyExtractor={item => item.id}
              data={[
                ...productsInCart
                  .reduce((acc: Map<any, any>, el: any) => {
                    acc.set(el.id, el);
                    return acc;
                  }, new Map())
                  .values(),
              ]}
              renderItem={renderItem}
              ListFooterComponent={renderFooter}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default AuthorizedCartScreen;

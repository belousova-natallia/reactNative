import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CartIcon} from '../components/cartIcon';
import {Text, View} from 'react-native';
import {styles} from '../screens/mainPage/styles/mainStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../screens/mainPage/MainScreen';
import {TestScreen} from '../screens/testScreen';
import ProductDetailsScreen from '../screens/productDetails/ProductDetailsScreen';
import {productDetailsStyles} from '../screens/productDetails/styles/productDetailsStyles';
import AuthorizedCartScreen from '../screens/cart/authorizedCartScreen';
import {SelectColorModal} from '../modals/selectColorModal';
import {LoginToContinueModal} from '../modals/loginToContinueModal';
import {ProductAddedModal} from '../modals/productAddedModal';
import React from 'react';
import nonAuthorizedCartScreen from '../screens/cart/nonAuthorizedCartScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function MainStackNavigator({userToken}: {userToken: string | null}) {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={({navigation}) => {
            return {
              title: '',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#008ACE'},
              headerRight: () => (
                <View style={productDetailsStyles.headerIcons}>
                  <Icon
                    name="heart-o"
                    size={20}
                    color="#fff"
                    style={productDetailsStyles.heartIcon}
                  />
                  <CartIcon navigation={navigation} style={{}} />
                </View>
              ),
            };
          }}
        />
        {userToken == null ? (
          <Stack.Screen name="My Cart" component={nonAuthorizedCartScreen} />
        ) : (
          <Stack.Screen name="My Cart" component={AuthorizedCartScreen} />
        )}
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="SelectColorModal" component={SelectColorModal} />
        <Stack.Screen
          name="LoginToContinueModal"
          component={LoginToContinueModal}
        />
        <Stack.Screen name="ProductAddedModal" component={ProductAddedModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const navigationOptionsHeader = ({navigation}: {navigation: any}) => {
  return {
    headerStyle: {backgroundColor: '#008ACE'},
    headerRightStyle: {},
    headerRight: () => (
      <CartIcon navigation={navigation} style={{paddingHorizontal: 15}} />
    ),
    headerTitle: () => (
      <View style={styles.menubar}>
        <Text style={styles.title}>Ecommerce store</Text>
      </View>
    ),
    headerLeft: () => (
      <View>
        <Icon
          name="bars"
          size={18}
          color="#fff"
          onPress={() => navigation.toggleDrawer()}
          style={{padding: 20}}
        />
      </View>
    ),
  };
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MainScreen}
        options={navigationOptionsHeader}
      />
      <Drawer.Screen name="TestScreen" component={TestScreen} />
    </Drawer.Navigator>
  );
}

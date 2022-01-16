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
import {AuthContext} from '../../index';
import CustomDrawer from './customDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function MainStackNavigator() {
  const {userToken} = React.useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={navigationOptionsHeader}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={({navigation}) => {
            return {
              headerShown: true,
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
          size={20}
          color="#fff"
          onPress={() => navigation.toggleDrawer()}
          style={{paddingVertical: 20, paddingRight: 20}}
        />
      </View>
    ),
  };
};

const navigationOptionsHeaderDrawer = ({navigation}: {navigation: any}) => {
  return {
    title: 'Ecommerce Store',
    headerStyle: {backgroundColor: '#008ACE'},
    style: {fontSize: 30},
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
          size={20}
          color="#fff"
          onPress={() => navigation.toggleDrawer()}
          style={{padding: 20}}
        />
      </View>
    ),
  };
};

export const DrawerNavigator = () => {
  const {userToken} = React.useContext(AuthContext);
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 340,
        },
      }}>
      <Drawer.Screen
        name="Root"
        component={MainStackNavigator}
        options={navigationOptionsHeaderDrawer}
      />
      {userToken == null ? (
        <Drawer.Screen
          name="My Cart"
          component={nonAuthorizedCartScreen}
          options={{
            headerShown: true,
          }}
        />
      ) : (
        <Drawer.Screen
          name="My Cart"
          component={AuthorizedCartScreen}
          options={{
            headerShown: true,
          }}
        />
      )}

      <Drawer.Screen name="TestScreen" component={TestScreen} />
    </Drawer.Navigator>
  );
};

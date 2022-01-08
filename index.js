/**
 * @format
 */
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import React, {useReducer, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './app/navigation/mainStackNavigator';
import {getToken} from './app/services/authService';

AppRegistry.registerComponent(appName, () => App);

export const AuthContext = React.createContext();
export const ProductContext = React.createContext();
const App = () => {
  const [userToken, setToken] = useState(null);
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'ADD_TO_CART':
          return {
            ...prevState,
            productsInCart: [...prevState.productsInCart, action.product],
          };
        case 'REMOVE_ONE_FROM_CART':
          const index = prevState.productsInCart.findIndex(
            el => el.id === action.product.id,
          );
          const products = [...prevState.productsInCart];
          products.splice(index, 1);
          return {
            ...prevState,
            productsInCart: products,
          };
        case 'DELETE_FROM_CART':
          return {
            ...prevState,
            productsInCart: [
              ...prevState.productsInCart.filter(item => {
                return item.id !== action.product.id;
              }),
            ],
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      productsInCart: [],
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;

      try {
        token = userToken;
        //userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: token});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        getToken(data.username, data.password).then(res => {
          setToken(res.access_token);
        });
        dispatch({type: 'SIGN_IN', token: userToken});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        getToken(data.username, data.password).then(res => {
          setToken(res.access_token);
        });

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  const productContext = {
    addToCart: product => {
      dispatch({type: 'ADD_TO_CART', product: product});
    },
    removeOneFromCart: product => {
      dispatch({type: 'REMOVE_ONE_FROM_CART', product: product});
    },
    deleteFromCart: product => {
      dispatch({type: 'DELETE_FROM_CART', product: product});
    },

    productsInCart: state.productsInCart,
  };

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <ProductContext.Provider value={productContext}>
          <MainStackNavigator userToken={userToken} />
        </ProductContext.Provider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

/**
 * @format
 */
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

import Main from './app/screens/mainPage/MainScreen';
import ProductDetailPage from './app/screens/productDetails/ProductDetailsScreen';

AppRegistry.registerComponent(appName, () => ProductDetailPage);

/**
 * @format
 */
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

import Main from './components/mainPage/Main';
import ProductDetailPage from './components/productDetails/ProductDetailsPage';

AppRegistry.registerComponent(appName, () => ProductDetailPage);

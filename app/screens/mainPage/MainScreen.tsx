import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles/mainStyles';

import SearchBar from './SearchBar';
import {ItemsContainer} from './ItemsContainer';

const MainScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menubar}>
        <View
          style={{
            flex: 1,
          }}>
          <Icon name="bars" size={20} color="#fff" />
        </View>
        <View>
          <Text style={styles.title}>Ecommerce store</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        />
        <Icon name="shopping-basket" size={20} color="#fff" />
      </View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <ItemsContainer />
    </SafeAreaView>
  );
};

export default MainScreen;

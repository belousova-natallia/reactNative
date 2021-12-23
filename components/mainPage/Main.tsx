import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../../styles/mainStyles';

import SearchBar from './SearchBar';
import {ItemsContainer} from './ItemsContainer';

const Main = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <>
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
    </>
  );
};

export default Main;

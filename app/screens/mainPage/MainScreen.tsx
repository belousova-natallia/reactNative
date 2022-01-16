import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles/mainStyles';

import SearchBar from './SearchBar';
import {ItemsContainer} from './ItemsContainer';

const MainScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
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

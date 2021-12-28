// SearchBar.js
import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {searchBoxStyles} from './styles/mainStyles';

export interface SearchBarInterface {
  clicked: any;
  searchPhrase: string | undefined;
  setSearchPhrase: ((text: string) => void) | undefined;
  setClicked: (arg0: boolean) => void;
}

const SearchBar = (props: SearchBarInterface) => {
  return (
    <View style={searchBoxStyles.container}>
      <View
        style={
          !props.clicked
            ? searchBoxStyles.searchBar__unclicked
            : searchBoxStyles.searchBar__clicked
        }>
        {/* search Icon */}
        <Icon name="search" size={18} color="grey" style={{marginLeft: 10}} />
        {/* Input field */}
        <TextInput
          style={searchBoxStyles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
      </View>
    </View>
  );
};
export default SearchBar;

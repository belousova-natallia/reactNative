import React from 'react';
import {Pressable, Text, View} from 'react-native';

export const TestScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is the Test screen!</Text>
      <Pressable onPress={() => navigation.navigate('SelectColorModal')}>
        <Text>Open SelectColorModal</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ProductAddedModal')}>
        <Text>Open ProductAddedModal</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('LoginToContinueModal')}>
        <Text>Open LoginToContinueModal</Text>
      </Pressable>
    </View>
  );
};

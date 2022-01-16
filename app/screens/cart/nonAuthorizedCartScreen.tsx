import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {AuthContext} from '../../../index';

const NonAuthorizedCartScreen = () => {
  const {signIn} = React.useContext(AuthContext);
  const username = 'admin';
  const password = '1234';
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Icon
          name="user-circle"
          size={180}
          color="#008ACE"
          style={styles.img}
        />
        <Text style={styles.cartTitle}>Login First!</Text>
        <Text>Login first to view your cart</Text>
        <Pressable
          style={styles.button}
          onPress={() => signIn({username, password})}>
          <Text style={styles.textStyle}>Login now</Text>
        </Pressable>
        <Text>New here? Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

export default NonAuthorizedCartScreen;

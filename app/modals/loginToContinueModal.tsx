import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

export const LoginToContinueModal = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="times-circle-o" size={80} color="#DD6B55" />
            <Text style={styles.modalTitleText}>Login To Continue</Text>
            <Text>Please login to add product in your cart</Text>
            <View style={styles.loginSignUpButtons}>
              <Pressable
                style={[styles.button, styles.buttonLogin]}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textStyle}>Login</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonLogin]}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textStyle}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

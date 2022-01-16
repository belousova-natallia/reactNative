import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

export const SelectColorModal = ({navigation}: {navigation: any}) => {
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
            <Text style={styles.modalTitleText}>Select color</Text>
            <Text>Please select your color to add this item in your cart</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.goBack()}>
              <Text style={styles.textStyle}> OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

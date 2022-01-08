import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

export const ProductAddedModal = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="check-circle-o" size={80} color="#A5DC86" />
            <Text style={styles.modalTitleText}>
              Product added to your cart
            </Text>

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

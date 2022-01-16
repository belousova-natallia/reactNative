import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {drawerNavigator} from './styles';

const CustomDrawer = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={drawerNavigator.divider}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Root')}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 40,
                  marginLeft: 5,
                  color: '#008ACE',
                }}>
                Ecommerce store
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={drawerNavigator.titles}>My account</Text>

          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="user" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>My Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="heart" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>My Wish list</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('My Cart');
            }}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="shopping-cart" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>My Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="cart-arrow-down" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>My Orders</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={drawerNavigator.divider}>
          <Text style={drawerNavigator.titles}>Support</Text>

          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="envelope" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="phone" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>Call</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Root')}
            style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="share-alt" size={20} color="#008ACE" />
              <Text style={drawerNavigator.menuElements}>Share</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomDrawer;

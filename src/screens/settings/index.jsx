import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {navigate} from '../../navigations/RootNavigation';
import {useNavigation} from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Address')}>
        <Text>Go to Address</Text>
      </TouchableOpacity>
    </View>
  );
}

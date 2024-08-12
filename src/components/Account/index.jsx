import React from 'react';
import {View, Platform, Pressable, TouchableOpacity} from 'react-native';

export default function AccountCard({onPress, children}) {
  const Touchable = Platform.OS === 'android' ? Pressable : TouchableOpacity;
  return (
    <TouchableOpacity onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  );
}

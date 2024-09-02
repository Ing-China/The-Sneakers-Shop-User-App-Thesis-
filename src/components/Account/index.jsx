import React from 'react';
import {View, Platform, Pressable, TouchableOpacity} from 'react-native';
import styles from './style';

export default function AccountCard({onPress, children, containerStyle}) {
  const Touchable = Platform.OS === 'android' ? Pressable : TouchableOpacity;
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <View>{children}</View>
    </Pressable>
  );
}

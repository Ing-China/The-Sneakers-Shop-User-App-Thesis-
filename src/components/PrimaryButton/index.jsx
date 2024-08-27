import {View, Text} from 'react-native';
import React from 'react';
import Touchable from '../Account/index';
import styles from './style';
export default function PrimaryButton({onPress, title, containerStyle}) {
  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </Touchable>
  );
}

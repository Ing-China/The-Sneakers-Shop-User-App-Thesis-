import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import Touchable from '../Account/index';

export default function CircleButton({onPress, icon, color}) {
  return (
    <Touchable onPress={onPress}>
      <View style={[styles.buttonContainer, {backgroundColor: color}]}>
        {icon}
      </View>
    </Touchable>
  );
}

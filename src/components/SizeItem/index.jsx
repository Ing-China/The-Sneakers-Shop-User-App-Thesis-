import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import Touchable from '../Account/index';
import {Colors} from '../../constants';

export default function SizeItem({onPress, size, isSelected, containerStyle}) {
  return (
    <Touchable onPress={onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          isSelected && {backgroundColor: Colors.BLACK},
        ]}>
        <Text style={[styles.size, isSelected && {color: 'white'}]}>
          {size}
        </Text>
      </View>
    </Touchable>
  );
}

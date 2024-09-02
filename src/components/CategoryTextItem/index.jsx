import {View, Text} from 'react-native';
import React from 'react';
import Touchable from '../../components/Account/index';
import styles from './style';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export default function CategoryTextItem({category, isSelected, onPress}) {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scaleX: withTiming(isSelected ? 1 : 0, {duration: 500})}],
  }));

  return (
    <Touchable onPress={onPress}>
      <Text style={styles.name}>{category.name}</Text>
      <Animated.View style={[styles.underline, animatedStyles]} />
    </Touchable>
  );
}

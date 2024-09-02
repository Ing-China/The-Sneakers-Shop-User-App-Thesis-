import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

export default function DiscountItem({discountAmount}) {
  return (
    <View style={styles.container}>
      <Text style={styles.discountLabel}>{discountAmount}% OFF</Text>
    </View>
  );
}

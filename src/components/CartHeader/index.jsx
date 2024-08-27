import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {useTranslation} from 'react-i18next';

export default function CartHeader({count}) {
  const {t} = useTranslation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.label}>{t('cart.ORDERS')}</Text>
      <Text style={styles.items}>
        {count}
        {t('cart.Items')}
      </Text>
    </View>
  );
}

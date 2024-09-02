import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import CartItem from '../../components/CartItem';
import CartHeader from '../../components/CartHeader';
import styles from './style';

import CartData from '../../data/cart';
import PrimaryButton from '../../components/PrimaryButton';
export default function Cart() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({item}) => <CartItem cart={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<CartHeader count={3} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        ListFooterComponent={<View style={{height: 120}} />}
      />

      <View style={styles.checkoutWrapper}>
        <View style={styles.totalWrapper}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.price}>$1,594.50</Text>
        </View>
        <PrimaryButton title={t('cart.Check Out')} />
      </View>
    </View>
  );
}

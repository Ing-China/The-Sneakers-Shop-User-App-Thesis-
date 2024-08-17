import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Ordersdata from '../../data/Buying';
import styles from './style';
import BuyingCart from '../../components/BuyingCart';

export default function Orders() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Ordersdata}
        keyExtractor={item => item.id}
        renderItem={({item}) => <BuyingCart order={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        ListHeaderComponent={() => <View style={{height: 15}} />}
        ListFooterComponent={() => <View style={{height: 15}} />}
      />
    </View>
  );
}

import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './style';
import ProductItem from '../../components/ProductItem';
import {WINDOW_WIDTH} from '@gorhom/bottom-sheet';

import product from '../../data/product';

export default function Favorite() {
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({item, index}) => (
          <ProductItem
            product={item}
            containerStyle={{
              width: WINDOW_WIDTH / 2 - 30,
              marginLeft: index % 2 === 0 ? 20 : 20,
            }}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListHeaderComponent={<View style={{height: 15}} />}
        ListFooterComponent={<View style={{height: 15}} />}
      />
    </View>
  );
}

import {View, SafeAreaView, ScrollView, Text, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';

import styles from './style';
import SliderComponent from '../../components/Slider/inex';
import {useTranslation} from 'react-i18next';
import CartItem from '../../components/CartItem';

import slider from '../../data/slider';
import product from '../../data/product';
import category from '../../data/category';
import CategoryCart from '../../components/CategoryCart';

export default function Home() {
  const {t} = useTranslation();

  const [productItemWidth, setProductItemWidth] = useState(0);
  const [categoryItemWidth, setCategoryItemWidth] = useState(0);

  const flatListRef = useRef(null);

  const onProductLayout = event => {
    const {width} = event.nativeEvent.layout;
    if (width !== productItemWidth) {
      setProductItemWidth(width);
      flatListRef.current?.scrollToOffset({offset: 0, animated: false});
    }
  };

  const onCategoryLayout = event => {
    const {width} = event.nativeEvent.layout;
    if (width !== categoryItemWidth) {
      setCategoryItemWidth(width);
      flatListRef.current?.scrollToOffset({offset: 0, animated: false});
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SliderComponent sliders={slider} />

        <Text style={styles.recomLabel}>{t('home.Recently Viewed')}</Text>
        <FlatList
          ref={flatListRef}
          data={product}
          keyExtractor={item => item.id}
          horizontal={true}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={productItemWidth + 15}
          viewabilityConfig={viewabilityConfig}
          renderItem={({item}) => (
            <CartItem product={item} onLayout={onProductLayout} />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          ListHeaderComponent={<View style={{width: 15}} />}
          ListFooterComponent={<View style={{width: 15}} />}
        />

        <Text style={styles.recomLabel}>{t('home.Recommended For You')}</Text>
        <FlatList
          ref={flatListRef}
          data={product}
          keyExtractor={item => item.id}
          horizontal={true}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={productItemWidth + 15}
          viewabilityConfig={viewabilityConfig}
          renderItem={({item}) => (
            <CartItem product={item} onLayout={onProductLayout} />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          ListHeaderComponent={<View style={{width: 15}} />}
          ListFooterComponent={<View style={{width: 15}} />}
        />

        <Text style={styles.recomLabel}>{t('home.Shop By Category')}</Text>
        <FlatList
          ref={flatListRef}
          data={category}
          keyExtractor={item => item.id}
          horizontal={true}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={categoryItemWidth + 15}
          viewabilityConfig={viewabilityConfig}
          renderItem={({item}) => (
            <CategoryCart category={item} onLayout={onCategoryLayout} />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          ListHeaderComponent={<View style={{width: 15}} />}
          ListFooterComponent={<View style={{width: 15}} />}
        />

        <Text style={styles.recomLabel}>{t('home.Popular Brands')}</Text>
        <FlatList
          ref={flatListRef}
          data={category}
          keyExtractor={item => item.id}
          horizontal={true}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={categoryItemWidth + 15}
          viewabilityConfig={viewabilityConfig}
          renderItem={({item}) => (
            <CategoryCart category={item} onLayout={onCategoryLayout} />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          ListHeaderComponent={<View style={{width: 15}} />}
          ListFooterComponent={<View style={{width: 15}} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

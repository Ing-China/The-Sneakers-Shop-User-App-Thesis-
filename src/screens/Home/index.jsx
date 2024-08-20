import {View, SafeAreaView, ScrollView, Text, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';

import styles from './style';
import SliderComponent from '../../components/Slider/inex';
import {useTranslation} from 'react-i18next';
import CartItem from '../../components/CartItem';
import Touchable from '../../components/Account/index';

import slider from '../../data/slider';
import product from '../../data/product';
import category from '../../data/category';
import CategoryCart from '../../components/CategoryCart';
import brand from '../../data/brand';
import BrandCart from '../../components/BrandCart';
import {Icons} from '../../constants';
import bigslider from '../../data/bigslider';
import BigSliderComponent from '../../components/BigSlider/inex';
import {WINDOW_WIDTH} from '@gorhom/bottom-sheet';

export default function Home() {
  const {t} = useTranslation();

  const [productItemWidth, setProductItemWidth] = useState(0);
  const [categoryItemWidth, setCategoryItemWidth] = useState(0);
  const [brandItemWidth, setBrandItemWidth] = useState(0);

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

  const onBrandLayout = event => {
    const {width} = event.nativeEvent.layout;
    if (width !== brandItemWidth) {
      setBrandItemWidth(width);
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

        <View style={styles.brandWrapper}>
          <Text style={styles.recomLabel}>{t('home.Popular Brands')}</Text>
          <Touchable>
            <View style={styles.navigateWrapper}>
              <Text style={styles.seeAllBrand}>{t('home.See All Brands')}</Text>
              <Icons.RIGHTARROW width={20} height={20} />
            </View>
          </Touchable>
        </View>

        <FlatList
          ref={flatListRef}
          data={brand}
          keyExtractor={item => item.id}
          horizontal={true}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={brandItemWidth + 15}
          viewabilityConfig={viewabilityConfig}
          renderItem={({item}) => (
            <BrandCart brand={item} onLayout={onBrandLayout} />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          ListHeaderComponent={<View style={{width: 15}} />}
          ListFooterComponent={<View style={{width: 15}} />}
        />

        <View style={styles.bigSliderContainer}>
          <BigSliderComponent bigsliders={bigslider} />
        </View>

        <View style={styles.brandWrapper}>
          <Text style={styles.recomLabel}>{t('home.Trending Sneakers')}</Text>
          <Touchable>
            <View style={styles.navigateWrapper}>
              <Text style={styles.seeAllBrand}>{t('home.See All')}</Text>
              <Icons.RIGHTARROW width={20} height={20} />
            </View>
          </Touchable>
        </View>

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

        <Text style={styles.recomLabel}>{t('home.All Product')}</Text>

        <FlatList
          data={product}
          renderItem={({item, index}) => (
            <CartItem
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
          ListFooterComponent={<View style={{height: 15}} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import Swiper from 'react-native-swiper';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Icons} from '../../constants';
export default function GallarySlider({GallarySlider}) {
  return (
    <View style={styles.imageContainer}>
      <Swiper
        showsPagination={false}
        autoplay={false}
        showsButtons={true}
        nextButton={
          <View style={styles.iconContainer}>
            <Icons.NEXT />
          </View>
        }
        prevButton={
          <View style={styles.iconContainer}>
            <Icons.PREV />
          </View>
        }
        buttonWrapperStyle={{padding: 5}}>
        {GallarySlider.map((item, index) => (
          <View key={index}>
            <CachedImage
              style={styles.image}
              resizeMode="contain"
              source={item}
              loadingImageComponent={() => (
                <LoadingImage style={{height: 200, width: 200}} />
              )}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import Swiper from 'react-native-swiper';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';

export default function BigSliderComponent({bigsliders}) {
  return (
    <View style={styles.imageContainer}>
      <Swiper showsPagination={false} autoplay={true} autoplayTimeout={5}>
        {bigsliders.map((item, index) => (
          <View key={index}>
            <CachedImage
              style={styles.image}
              resizeMode="cover"
              source={item.imageUrl}
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

import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';

export default function BrandCart({brand, onLayout}) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.imageWrapper}>
        <CachedImage
          resizeMode="contain"
          style={styles.image}
          source={brand.imageUrl}
          loadingImageComponent={() => (
            <LoadingImage style={{height: 90, width: 90}} />
          )}
        />
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{brand.name}</Text>
      </View>
    </View>
  );
}

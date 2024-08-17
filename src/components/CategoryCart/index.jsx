import {View, Text} from 'react-native';
import React from 'react';
import Touchable from '../../components/Account/index';
import LoadingImage from '../LoadingImage';
import {CachedImage} from '@georstat/react-native-image-cache';
import styles from './style';

export default function CategoryCart({category, onLayout}) {
  return (
    <Touchable>
      <View style={styles.container} onLayout={onLayout}>
        <View style={styles.imageContainer}>
          <CachedImage
            style={styles.image}
            resizeMode="contain"
            source={category.imageUrl}
            loadingImageComponent={() => (
              <LoadingImage style={{height: 90, width: 90}} />
            )}
          />
        </View>
        <Text style={styles.name}>{category.name}</Text>
      </View>
    </Touchable>
  );
}

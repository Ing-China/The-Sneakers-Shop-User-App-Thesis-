import {View} from 'react-native';
import React from 'react';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import Touchable from '../Account/index';
import styles from './style';

export default function ProductDetailImage({onPress, image}) {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <CachedImage
          style={styles.image}
          resizeMode="contain"
          source={image}
          loadingImageComponent={() => (
            <LoadingImage style={{height: 150, width: 150}} />
          )}
        />
      </View>
    </Touchable>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import Touchable from '../../components/Account/index';

export default function NotficationCart({notification}) {
  return (
    <Touchable>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <CachedImage
              style={styles.image}
              resizeMode="contain"
              source={notification.imageUrl}
              loadingImageComponent={() => (
                <LoadingImage style={{height: 90, width: 90}} />
              )}
            />
          </View>
          <View style={styles.nameWrapper}>
            <Text numberOfLines={1} style={styles.name}>
              {notification.name}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {notification.description}
            </Text>
          </View>
        </View>
      </View>
    </Touchable>
  );
}

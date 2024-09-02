import {View} from 'react-native';
import React from 'react';
import styles from './style';
import GallarySlider from '../../components/GallarySlider';

export default function Gallary({route}) {
  const {imageGallery} = route.params;
  return (
    <View style={styles.container}>
      <GallarySlider GallarySlider={imageGallery} />
    </View>
  );
}

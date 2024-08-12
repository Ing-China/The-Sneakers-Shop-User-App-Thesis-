import {View, SafeAreaView, Image} from 'react-native';
import React from 'react';

import Swiper from 'react-native-swiper';
import styles from './style';

const image = [
  require('../../assets/images/slider1.jpg'),
  require('../../assets/images/slider2.jpg'),
];

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.imgContainer}>
        <Swiper showsPagination={false} autoplay={true}>
          {image.map((image, index) => (
            <View key={index}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
}

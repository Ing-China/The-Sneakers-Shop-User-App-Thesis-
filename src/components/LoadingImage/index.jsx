import {Image, View} from 'react-native';
import React from 'react';

export default function LoadingImage({style}) {
  return (
    <View>
      <Image
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
        style={style}
      />
    </View>
  );
}

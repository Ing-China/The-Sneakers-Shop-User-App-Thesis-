import {View, Text} from 'react-native';
import React from 'react';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {shadowStyle} from '../../constants/shadow';
import {Colors, Icons} from '../../constants';
import CircleButton from '../CircleButton';
export default function CartItem({cart}) {
  const {t} = useTranslation();
  return (
    <View style={[styles.container, shadowStyle]}>
      <View style={styles.imageWrapper}>
        <CachedImage
          style={styles.image}
          resizeMode="contain"
          source={cart.imageUrl}
          loadingImageComponent={() => (
            <LoadingImage style={{height: 90, width: 90}} />
          )}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>{cart.name}</Text>
        <View style={styles.iconDelete}>
          <CircleButton icon={<Icons.CARTDELETE />} color={Colors.RED} />
        </View>

        <Text style={styles.size}>
          {t('cart.size')} {cart.size}
        </Text>

        <View style={styles.row}>
          <Text style={styles.price}>${cart.price}</Text>
          <Text style={styles.discount}>${cart.price}</Text>
        </View>

        <View style={styles.quantityWrapper}>
          <View style={styles.row}>
            <CircleButton icon={<Icons.MINUS />} color={Colors.LIGHTSILVER} />
            <Text style={styles.quantity}>{cart.quantity}</Text>
            <CircleButton icon={<Icons.PLUS />} color={Colors.BLACK} />
          </View>
        </View>
      </View>
    </View>
  );
}

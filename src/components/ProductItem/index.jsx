import {View, Text} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import {Colors, Icons} from '../../constants';

import Touchable from '../Account/index';
import LoadingImage from '../LoadingImage';

export default function ProductItem({product, onLayout, containerStyle}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useMemo(() => {
    setIsFavorite(product.isFavorite);
  }, [product.isFavorite]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Touchable>
      <View style={[styles.container, containerStyle]} onLayout={onLayout}>
        <View style={styles.discountWrapper}>
          <Icons.DISCOUNT style={styles.discount} width={40} height={40} />
          <View style={styles.discountState}>
            <Text style={styles.discount}>${product.discountAmount}</Text>
            <Text style={styles.discount}>OFF</Text>
          </View>
        </View>

        <View style={styles.favoriteWrapper}>
          <Touchable onPress={toggleFavorite}>
            {isFavorite ? (
              <Icons.FAVORITEFILL
                style={styles.favorite}
                width={24}
                height={24}
                fill={Colors.BLACK}
              />
            ) : (
              <Icons.FAVORITE
                style={styles.favorite}
                width={24}
                height={24}
                color={Colors.BLACK}
              />
            )}
          </Touchable>
        </View>

        <CachedImage
          style={styles.image}
          resizeMode="contain"
          source={product.imageUrl}
          loadingImageComponent={() => (
            <LoadingImage style={{height: 90, width: 90}} />
          )}
        />

        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceAfterDiscount}>
            ${product.priceAfterDiscount}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </Touchable>
  );
}

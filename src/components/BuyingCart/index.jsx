import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import Touchable from '../../components/Account/index';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';

export default function BuyingCart({order}) {
  return (
    <Touchable>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.status}>{order.orderStatus}</Text>
          <Text style={styles.transaction}>{order.transactionDate}</Text>
        </View>
        {order.sellLines.map(line => (
          <View key={line.productId} style={styles.sellLineContainer}>
            <View style={styles.wrapper}>
              <View style={styles.imageWrapper}>
                <CachedImage
                  resizeMode="contain"
                  style={styles.image}
                  source={line.imageUrl}
                  loadingImageComponent={() => (
                    <LoadingImage style={{height: 50, width: 50}} />
                  )}
                />
              </View>
              <View style={styles.nameQTYWrapper}>
                <Text numberOfLines={1} style={styles.productName}>
                  {line.productName}
                </Text>
                <Text style={styles.productQuantity}> x {line.quantity}</Text>
              </View>
            </View>
            <View style={styles.mainWrapper}>
              <Text style={styles.productPrice}>
                ${line.productPrice.toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </Touchable>
  );
}

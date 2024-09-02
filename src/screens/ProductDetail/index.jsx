import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import ProductDetailData from '../../data/productDetail';
import ProductDetailImage from '../../components/ProductDetailImage';
import styles from './style';
import {navigate} from '../../navigations/RootNavigation';
import FavoriteButton from '../../components/FavoriteButton';
import DiscountItem from '../../components/DiscountItem';
import {Icons} from '../../constants';
import Touchable from '../../components/Account/index';
import CustomBottomSheetModal from '../../components/CustomBottomSheetModal';
import {useTranslation} from 'react-i18next';
import SizeItem from '../../components/SizeItem';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@gorhom/bottom-sheet';

export default function ProductDetail() {
  const {t} = useTranslation();

  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(ProductDetailData.size[0]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current?.present();
  };

  const ITEM_HEIGHT = 60; // Adjust based on your design
  const PADDING = 60; // Additional padding at the bottom
  const ITEMS_PER_ROW = 3;

  // Function to calculate snap point dynamically
  const calculateSnapPoint = itemCount => {
    const rows = Math.ceil(itemCount / ITEMS_PER_ROW);
    const totalHeight = rows * ITEM_HEIGHT + PADDING;
    // Convert the height to a percentage of the screen height
    const snapPointPercentage = (totalHeight / SCREEN_HEIGHT) * 100;
    return `${Math.min(snapPointPercentage, 100)}%`; // Cap at 100%
  };

  const snapPoint = useMemo(
    () => calculateSnapPoint(ProductDetailData.size.length),
    [ProductDetailData.size.length],
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <ProductDetailImage
            onPress={() =>
              navigate('Gallary', {
                imageGallery: ProductDetailData.imageGallery,
              })
            }
            image={ProductDetailData.imageUrl}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{ProductDetailData.name}</Text>
          <FavoriteButton onPress={toggleFavorite} isFavorite={isFavorite} />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>$99.00</Text>
          <Text style={styles.discount}>$100.00</Text>
          <DiscountItem discountAmount={ProductDetailData.discountAmount} />
        </View>

        <Touchable onPress={handleOpenModal}>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>{t('detail.Size')}</Text>
            <View style={styles.sizeWrapper}>
              <Text style={styles.size}>{selectedSize}</Text>
              <Icons.ARROWDOWN height={6} width={15} />
            </View>
          </View>
        </Touchable>
      </ScrollView>

      <CustomBottomSheetModal ref={modalRef} snapPoints={[snapPoint]}>
        <View style={styles.sizeModalContainer}>
          <Text style={styles.SelectLabel}>{t('detail.Select Size')}</Text>

          <FlatList
            scrollEnabled={false}
            data={ProductDetailData.size}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <SizeItem
                  size={item}
                  isSelected={selectedSize === item}
                  onPress={() => setSelectedSize(item)}
                  containerStyle={{
                    width: SCREEN_WIDTH / 3 - 15 - 5,
                    marginLeft: 15,
                    marginRight: isLastInRow ? 15 : 0,
                    marginBottom: 15,
                  }}
                />
              );
            }}
            numColumns={3}
          />
        </View>
      </CustomBottomSheetModal>
    </View>
  );
}

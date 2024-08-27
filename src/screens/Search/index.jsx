import {View, Text, SafeAreaView, TextInput, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import {Icons} from '../../constants';
import Touchable from '../../components/Account/index';
import {useTranslation} from 'react-i18next';

import category from '../../data/category';
import product from '../../data/product';
import CategoryTextItem from '../../components/CategoryTextItem';
import ProductItem from '../../components/ProductItem';
import {WINDOW_WIDTH} from '@gorhom/bottom-sheet';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(category[0]?.id);
  const inputRef = useRef();
  const {t} = useTranslation();

  const handleCategoryPress = categoryId => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={t('search.Find your favourite one')}
        />
        <Touchable onPress={() => inputRef.current?.focus()}>
          <Icons.Search width={20} height={20} />
        </Touchable>
      </View>

      <View style={styles.category}>
        <FlatList
          data={category}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CategoryTextItem
              category={item}
              isSelected={item.id == selectedCategoryId}
              onPress={() => handleCategoryPress(item.id)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={product}
        renderItem={({item, index}) => (
          <ProductItem
            product={item}
            containerStyle={{
              width: WINDOW_WIDTH / 2 - 30,
              marginLeft: index % 2 === 0 ? 20 : 20,
            }}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListHeaderComponent={<View style={{height: 15}} />}
        ListFooterComponent={<View style={{height: 15}} />}
      />
    </SafeAreaView>
  );
}

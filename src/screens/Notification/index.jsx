import {View, Text, FlatList} from 'react-native';
import React from 'react';

import notification from '../../data/notification';
import NotficationCart from '../../components/NotificationCart';
import styles from './style';

export default function Notification() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notification}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NotficationCart notification={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

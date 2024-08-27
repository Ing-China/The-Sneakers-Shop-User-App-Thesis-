import {View, Text, FlatList} from 'react-native';
import React from 'react';

import notification from '../../data/notification';
import NotficationItem from '../../components/NotificationItem';
import styles from './style';

export default function Notification() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notification}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NotficationItem notification={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

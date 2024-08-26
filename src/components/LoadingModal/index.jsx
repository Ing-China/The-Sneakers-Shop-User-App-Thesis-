import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import styles from './style';
export default function LoadingModal({isVisible}) {
  return (
    <Modal transparent visible={isVisible}>
      <View style={[styles.container]}>
        <View style={[styles.contentContainer]}>
          <ActivityIndicator color={'black'} />
        </View>
      </View>
    </Modal>
  );
}

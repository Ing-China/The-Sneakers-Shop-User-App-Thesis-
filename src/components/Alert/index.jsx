import {View, Text, Modal} from 'react-native';
import React from 'react';
import styles from './style';
import Touchable from '../Account/index';

export default function Alert({visible, title, message, buttonTitle, onClose}) {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.line}></View>
          <Touchable onPress={onClose}>
            <Text style={styles.buttonTitle}>{buttonTitle}</Text>
          </Touchable>
        </View>
      </View>
    </Modal>
  );
}

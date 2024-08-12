import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {Icons} from '../../constants';

export default function AboutUs() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.labelVersion}>
          {t('startUp.Version')} 1.0.0 (1)
        </Text>
      </View>
      <View style={styles.powerByContainer}>
        <View style={styles.poweredWrapper}>
          <Icons.COPYRIGHT width={18} height={18} />
          <Text style={styles.labelPoweredBy}> 2024 IT Smos Snea</Text>
        </View>
      </View>
    </View>
  );
}

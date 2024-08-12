import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSettings} from '../../hooks';
import i18n from '../../../Translations';
import {addEventListener} from '@react-native-community/netinfo';
import styles from './style';
import {useTranslation} from 'react-i18next';

export default function StartUp() {
  const settings = useSettings();
  const {t} = useTranslation();
  i18n.changeLanguage(settings);

  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  console.log('CHECK_NETWORK', isConnected);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <Text style={styles.labelVersion}>{t('startUp.Version')} 1.0.0 (1)</Text>

      <View style={styles.powerByContainer}>
        <Text style={styles.labelVersion}>{t('startUp.Powered by')}</Text>
        <Text style={styles.labelPoweredBy}>IT Smos Snea</Text>
      </View>
    </View>
  );
}

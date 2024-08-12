import {View, Text, ScrollView, Button} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import SettingTouchable from '../../components/Account/index';
import {Colors, Icons} from '../../constants';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import styles from './style';
import {useTranslation} from 'react-i18next';
import i18n from '../../../Translations';
import {setToggleLanguage} from '../../store/action/settings';
import {useDispatch} from 'react-redux';
import {useSettings} from '../../hooks';
import {navigate} from '../../navigations/RootNavigation';
import {useNavigation} from '@react-navigation/native';

export default function Account() {
  const bottomSheetModalRef = useRef(null);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const settings = useSettings();
  const navigation = useNavigation();

  const switchToEnglish = () => {
    i18n.changeLanguage('en');
    dispatch(setToggleLanguage('en'));
  };

  const switchToKhmer = () => {
    i18n.changeLanguage('kh');
    dispatch(setToggleLanguage('kh'));
  };

  // variables
  const snapPoints = useMemo(() => ['27%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    [],
  );
  return (
    <ScrollView style={styles.container}>
      <SettingTouchable onPress={() => ''}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.USER width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>Profile</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => ''}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.BOX width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>Buying</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => ''}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.FAVORITE width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>Favorites</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('AboutUs')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.STORE width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>About Us</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={handlePresentModalPress}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.TRANSLATE width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>Language</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('Settings')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.SETTING width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>Setting</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => ''}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.LOGOUT width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>Sign Out</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.langLabel}>{t('account.Choose Language')}</Text>
          <SettingTouchable onPress={switchToKhmer}>
            <View style={styles.languageContainer}>
              <View style={styles.languageWrapper}>
                <Icons.CAMBO width={35} height={25} />
                <Text style={styles.langText}>{t('account.ភាសាខ្មែរ')}</Text>
              </View>
              {settings === 'kh' && <Icons.CHECK width={18} height={18} />}
            </View>
          </SettingTouchable>

          <SettingTouchable onPress={switchToEnglish}>
            <View style={styles.languageContainer}>
              <View style={styles.languageWrapper}>
                <Icons.UK width={35} height={25} />
                <Text style={styles.langText}>{t('account.ភាសាអង់គ្លេស')}</Text>
              </View>
              {settings === 'en' && <Icons.CHECK width={18} height={18} />}
            </View>
          </SettingTouchable>
        </BottomSheetView>
      </BottomSheetModal>
    </ScrollView>
  );
}

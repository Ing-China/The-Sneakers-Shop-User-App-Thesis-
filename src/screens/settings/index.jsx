import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import {navigate} from '../../navigations/RootNavigation';
import {useNavigation} from '@react-navigation/native';
import SettingTouchable from '../../components/Account/index';
import styles from './style';
import {Colors, Icons} from '../../constants';
import {useTranslation} from 'react-i18next';

export default function Settings() {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const bottomSheetModalRef = useRef(null);

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
            <Icons.NOTIFICATION width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Notification')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={handlePresentModalPress}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.DELETEICON width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>
              {t('account.Delete My Account')}
            </Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        backgroundStyle={{borderRadius: null}}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.label}>{t('account.Are you sure?')}</Text>
          <Text style={styles.langLabel}>
            {t(
              "account.We're sorry to see you go! Deleting your account is a permanent action that will erase all your data, including your profile and purchase history. This process is irreversible, so please confirm if you are sure you want to proceed.?",
            )}
          </Text>

          <View style={styles.btnContainer}>
            <SettingTouchable onPress={() => ''}>
              <Text>{t('account.Cancel')}</Text>
            </SettingTouchable>
            <SettingTouchable onPress={() => ''}>
              <Text>{t('account.Confirm Delete')}</Text>
            </SettingTouchable>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </ScrollView>
  );
}

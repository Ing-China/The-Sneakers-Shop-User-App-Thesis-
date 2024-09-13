import {View, Text, ScrollView, Linking} from 'react-native';
import React, {useRef} from 'react';

import SettingTouchable from '../../components/Account/index';
import styles from './style';
import {Colors, Icons} from '../../constants';
import {useTranslation} from 'react-i18next';
import CustomBottomSheetModal from '../../components/CustomBottomSheetModal';

export default function Settings() {
  const {t} = useTranslation();

  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current?.present();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <ScrollView style={styles.container}>
      <SettingTouchable
        onPress={() => {
          Linking.openSettings();
        }}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.NOTIFICATION width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Notification')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={handleOpenModal}>
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

      <CustomBottomSheetModal ref={modalRef} snapPoints={['35%']}>
        <Text style={styles.label}>{t('account.Are you sure?')}</Text>
        <View style={styles.line}></View>
        <Text style={styles.text}>
          {t(
            'account.Deleting your account will permanently remove all your data, including your profile and purchase history. This action cannot be undone. Please confirm if you wish to proceed.',
          )}
        </Text>
        <View style={styles.line}></View>

        <View style={styles.btnContainer}>
          <SettingTouchable
            onPress={closeModal}
            containerStyle={styles.buttonWhite}>
            <Text style={styles.cancel}>{t('account.Cancel')}</Text>
          </SettingTouchable>

          <View style={styles.buttonBlack}>
            <SettingTouchable>
              <Text style={styles.confirm}>{t('account.Confirm Delete')}</Text>
            </SettingTouchable>
          </View>
        </View>
      </CustomBottomSheetModal>
    </ScrollView>
  );
}

import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
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
import {CachedImage} from '@georstat/react-native-image-cache';

import profile from '../../data/profile';
import LoadingImage from '../../components/LoadingImage';
import CustomBottomSheetModal from '../../components/CustomBottomSheetModal';

export default function Account() {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const settings = useSettings();

  const switchToEnglish = () => {
    i18n.changeLanguage('en');
    dispatch(setToggleLanguage('en'));
  };

  const switchToKhmer = () => {
    i18n.changeLanguage('kh');
    dispatch(setToggleLanguage('kh'));
  };

  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current?.present();
  };

  //UI KIT
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SettingTouchable onPress={() => navigate('Profile')}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <CachedImage
              style={styles.image}
              resizeMode="cover"
              imageStyle={{borderRadius: 100}}
              source={profile.imageUrl}
              loadingImageComponent={() => (
                <LoadingImage style={{height: 90, width: 90}} />
              )}
            />
          </View>
          <Text style={styles.name}>{profile.name}</Text>
        </View>
      </SettingTouchable>

      <SettingTouchable onPress={() => navigate('Profile')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.USER width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Profile')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('Buying')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.BOX width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Buying')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('Cart')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.CART width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Cart')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('Favorite')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.FAVORITE width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Favorites')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('AboutUs')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.STORE width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.About Us')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={handleOpenModal}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.TRANSLATE width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Language')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>
      <SettingTouchable onPress={() => navigate('Settings')}>
        <View style={styles.settingContainer}>
          <View style={styles.settingWrapper}>
            <Icons.SETTING width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Setting')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>

      <SettingTouchable onPress={() => navigate('SignIn')}>
        <View style={[styles.settingContainer, styles.containerStyle]}>
          <View style={styles.settingWrapper}>
            <Icons.LOGOUT width={24} height={24} color={Colors.BLACK} />
            <Text style={styles.settingText}>{t('account.Sign Out')}</Text>
          </View>
          <Icons.ARROWRIGHT width={18} height={18} />
        </View>
      </SettingTouchable>

      <CustomBottomSheetModal ref={modalRef} snapPoints={['27%']}>
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
      </CustomBottomSheetModal>
    </ScrollView>
  );
}

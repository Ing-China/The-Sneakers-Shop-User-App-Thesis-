import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import profile from '../../data/profile';
import LoadingImage from '../../components/LoadingImage';
import {Colors, Icons} from '../../constants';
import {useTranslation} from 'react-i18next';
import Touchable from '../../components/Account/index';
import ImagePicker from 'react-native-image-crop-picker';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import {useToggle} from '../../hooks';

export default function Profile() {
  //STATE
  const [imageUrl, setImageUrl] = useState(profile.imageUrl);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  //HOOKS
  const {t} = useTranslation();
  const [isVisible1, toggleVisibility1] = useToggle();
  const [isVisible2, toggleVisibility2] = useToggle();

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
      });
      setImageUrl(image.path);
    } catch (error) {
      console.log('[DEBUG] IMAGE_INPUT', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <CachedImage
              style={styles.image}
              resizeMode="cover"
              imageStyle={{borderRadius: 100}}
              source={imageUrl}
              loadingImageComponent={() => (
                <LoadingImage style={{height: 90, width: 90}} />
              )}
            />
            <View style={styles.editContainer}>
              <Touchable onPress={openImagePicker}>
                <Icons.USEREDIT width={24} height={24} color={Colors.WHITE} />
              </Touchable>
            </View>
          </View>
        </View>

        <PrimaryInput
          label={t('profile.Name')}
          value={name}
          onChangeText={setName}
          placeholder={t('profile.Name')}
        />

        <PrimaryInput
          label={t('profile.Phone Number')}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={t('profile.Phone Number')}
        />

        <PrimaryInput
          label={t('profile.Email')}
          value={email}
          onChangeText={setEmail}
          placeholder={t('profile.Email')}
        />

        <PrimaryInput
          label={t('profile.Old Password')}
          value={oldPassword}
          onChangeText={setOldPassword}
          placeholder={t('profile.Old Password')}
          secureTextEntry={true}
          showPassword={isVisible1}
          toggleShowPassword={toggleVisibility1}
          withEyeIcon={true}
        />

        <PrimaryInput
          label={t('profile.New Password')}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder={t('profile.New Password')}
          secureTextEntry={true}
          showPassword={isVisible2}
          toggleShowPassword={toggleVisibility2}
          withEyeIcon={true}
        />

        <PrimaryButton
          title={t('profile.Save')}
          containerStyle={styles.primaryButton}
        />
      </ScrollView>
    </View>
  );
}

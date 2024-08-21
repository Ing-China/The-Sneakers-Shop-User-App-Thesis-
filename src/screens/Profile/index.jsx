import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import styles from './style';
import {CachedImage} from '@georstat/react-native-image-cache';
import profile from '../../data/profile';
import LoadingImage from '../../components/LoadingImage';
import {Colors, Icons} from '../../constants';
import {useTranslation} from 'react-i18next';
import Touchable from '../../components/Account/index';
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile() {
  const {t} = useTranslation();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState(profile.imageUrl);

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

        <Text style={styles.inputLabel}>{t('profile.Name')}</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder={t('profile.Name')}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        <Text style={styles.inputLabel}>{t('profile.Phone Number')}</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder={t('profile.Phone Number')}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        <Text style={styles.inputLabel}>{t('profile.Email')}</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder={t('profile.Email')}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        <Text style={styles.inputLabel}>{t('profile.Old Password')}</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder={t('profile.Old Password')}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        <Text style={styles.inputLabel}>{t('profile.New Password')}</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder={t('profile.New Password')}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <Touchable>
          <Text style={styles.btnLogin}>{t('profile.Save')}</Text>
        </Touchable>
      </ScrollView>
    </View>
  );
}

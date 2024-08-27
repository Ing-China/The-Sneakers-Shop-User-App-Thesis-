import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {Icons} from '../../constants';
import Touchable from '../../components/Account/index';
import {navigate} from '../../navigations/RootNavigation';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import {phoneNumberWithoutZeroPrefix} from '../../helper';
import LoadingModal from '../../components/LoadingModal';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import {useToggle} from '../../hooks';

export default function SignUp() {
  //STATE
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //HOOKS
  const {t} = useTranslation();
  const [isVisible1, toggleVisibility1] = useToggle();
  const [isVisible2, toggleVisibility2] = useToggle();

  const onSignUp = async () => {
    setLoading(true);

    const formattedPhoneNumber = `+855${phoneNumberWithoutZeroPrefix(
      phoneNumber,
    )}`;
    try {
      if (__DEV__) {
        auth().settings.appVerificationDisabledForTesting = true;
      }
      const confirmation = await auth().signInWithPhoneNumber(
        formattedPhoneNumber,
      );
      navigate('VerificationOTP', {phoneNumber, confirmation});
    } catch (error) {
      console.log('ERROR WHILE SIGNING UP WITH PHONE NUMBER:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={styles.signIn}>{t('signup.Sign Up')}</Text>
        </View>
        <PrimaryInput
          label={t('profile.Name')}
          value={name}
          onChangeText={setName}
          placeholder={t('profile.Name')}
        />
        <Text style={styles.inputLabel}>{t('signup.Phone Number')}</Text>
        <View style={styles.input1Container}>
          <View style={[styles.cambo, styles.input]}>
            <Icons.CAMBO width={35} height={35} />
            <Text style={styles.camboLabel}>+855</Text>
          </View>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[styles.phoneNumber, styles.input]}
            keyboardType="phone-pad"
          />
        </View>

        <PrimaryInput
          label={t('signup.Password')}
          value={password}
          onChangeText={setPassword}
          placeholder={t('signup.Password')}
          secureTextEntry={true}
          showPassword={isVisible1}
          toggleShowPassword={toggleVisibility1}
          withEyeIcon={true}
        />

        <PrimaryInput
          label={t('signup.Confirm Password')}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={t('signup.Confirm Password')}
          secureTextEntry={true}
          showPassword={isVisible2}
          toggleShowPassword={toggleVisibility2}
          withEyeIcon={true}
        />

        <PrimaryButton
          onPress={onSignUp}
          title={t('signup.Sign Up')}
          containerStyle={styles.primaryButton}
        />

        <View style={styles.signUp}>
          <Text style={styles.account}>
            {t('signup.Already have an account?')}
          </Text>
          <Touchable onPress={() => navigate('SignIn')}>
            <Text style={styles.signUpLabel}> {t('signup.Log In')}</Text>
          </Touchable>
        </View>
      </ScrollView>
      <LoadingModal isVisible={loading} />
    </KeyboardAvoidingView>
  );
}

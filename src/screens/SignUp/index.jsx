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

export default function SignUp() {
  const {t} = useTranslation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateFields = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = true;
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = true;
    }
    if (!password.trim()) {
      errors.password = true;
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = true;
    }
    if (password !== confirmPassword) {
      errors.passwordMismatch = true;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSignUp = async () => {
    if (!validateFields()) return;
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
        <Text style={styles.inputLabel}>{t('signup.Name')}</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder={t('signup.Name')}
            placeholderTextColor={validationErrors.name ? 'red' : 'black'}
            value={name}
            onChangeText={setName}
            style={[
              styles.name,
              styles.input,
              validationErrors.name && styles.inputError,
            ]}
          />
        </View>
        <Text style={styles.inputLabel}>{t('signup.Phone Number')}</Text>
        <View style={styles.input1Container}>
          <View style={[styles.cambo, styles.input]}>
            <Icons.CAMBO width={35} height={35} />
            <Text style={styles.camboLabel}>+855</Text>
          </View>
          <TextInput
            placeholder={t('signup.Phone Number')}
            placeholderTextColor={
              validationErrors.phoneNumber ? 'red' : 'black'
            }
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[
              styles.phoneNumber,
              styles.input,
              validationErrors.phoneNumber && styles.inputError,
            ]}
            keyboardType="phone-pad"
          />
        </View>
        <Text style={styles.inputLabel}>{t('signup.Password')}</Text>
        <View style={styles.Wrapper}>
          <View
            style={[
              styles.input2Container,
              validationErrors.password && styles.inputError,
            ]}>
            <TextInput
              placeholder={t('signup.Password')}
              placeholderTextColor={validationErrors.password ? 'red' : 'black'}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={styles.password}
            />
            {showPassword ? (
              <Touchable onPress={toggleShowPassword}>
                <Icons.EYEOPEN width={25} height={25} style={styles.icon} />
              </Touchable>
            ) : (
              <Touchable onPress={toggleShowPassword}>
                <Icons.EYECLOSE width={25} height={25} style={styles.icon} />
              </Touchable>
            )}
          </View>
        </View>

        <Text style={styles.inputLabel}>{t('signup.Confirm Password')}</Text>
        <View style={styles.Wrapper}>
          <View
            style={[
              styles.input2Container,
              validationErrors.confirmPassword && styles.inputError,
              validationErrors.passwordMismatch && styles.inputError,
            ]}>
            <TextInput
              placeholder={t('signup.Confirm Password')}
              placeholderTextColor={
                validationErrors.confirmPassword ||
                validationErrors.passwordMismatch
                  ? 'red'
                  : 'black'
              }
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.password}
            />
            {showConfirmPassword ? (
              <Touchable onPress={toggleShowConfirmPassword}>
                <Icons.EYEOPEN width={25} height={25} style={styles.icon} />
              </Touchable>
            ) : (
              <Touchable onPress={toggleShowConfirmPassword}>
                <Icons.EYECLOSE width={25} height={25} style={styles.icon} />
              </Touchable>
            )}
          </View>
          {validationErrors.passwordMismatch && (
            <Text style={styles.errorText}>
              {t('signup.Passwords do not match')}
            </Text>
          )}
        </View>

        <Touchable onPress={onSignUp}>
          <Text style={styles.btnLogin}>{t('signup.Sign Up')}</Text>
        </Touchable>

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

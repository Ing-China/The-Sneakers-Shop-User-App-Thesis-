import {View, Text, ScrollView, Image, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {Icons} from '../../constants';
import Touchable from '../../components/Account/index';
import {navigate} from '../../navigations/RootNavigation';
import {useTranslation} from 'react-i18next';

export default function SignUp() {
  const {t} = useTranslation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

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

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const login = () => {
    if (validateFields()) {
      console.log(name);
      console.log(phoneNumber);
      console.log(password);
      console.log(confirmPassword);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            placeholderTextColor={validationErrors.name ? 'red' : 'black'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[
              styles.phoneNumber,
              styles.input,
              validationErrors.phoneNumber && styles.inputError,
            ]}
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
              placeholderTextColor={validationErrors.name ? 'red' : 'black'}
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
            ]}>
            <TextInput
              placeholder={t('signup.Confirm Password')}
              placeholderTextColor={validationErrors.name ? 'red' : 'black'}
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
        </View>

        <Touchable onPress={() => navigate('VerificationOTP')}>
          <Text style={styles.btnLogin}>{t('signup.Log In')}</Text>
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
    </View>
  );
}

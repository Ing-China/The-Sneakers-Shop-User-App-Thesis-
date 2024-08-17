import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {Icons} from '../../constants';
import Touchable from '../../components/Account/index';
import {navigate} from '../../navigations/RootNavigation';
import {useTranslation} from 'react-i18next';

export default function SignIn() {
  const {t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const validateFields = () => {
    const errors = {};
    if (!phoneNumber.trim()) {
      errors.phoneNumber = true;
    }
    if (!password.trim()) {
      errors.password = true;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const login = () => {
    if (validateFields()) {
      console.log(phoneNumber);
      console.log(password);
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
          <Text style={styles.signIn}>{t('signin.Sign In')}</Text>
        </View>
        <Text style={styles.inputLabel}>{t('signin.Phone Number')}</Text>
        <View style={styles.input1Container}>
          <View style={[styles.cambo, styles.input]}>
            <Icons.CAMBO width={35} height={35} />
            <Text style={styles.camboLabel}>+855</Text>
          </View>
          <TextInput
            placeholder={t('signin.Phone Number')}
            placeholderTextColor={
              validationErrors.phoneNumber ? 'red' : 'black'
            }
            style={[
              styles.phoneNumber,
              styles.input,
              validationErrors.phoneNumber && styles.inputError,
            ]}
          />
        </View>
        <Text style={styles.inputLabel}>{t('signin.Password')}</Text>
        <View style={styles.Wrapper}>
          <View
            style={[
              styles.input2Container,
              validationErrors.password && styles.inputError,
            ]}>
            <TextInput
              placeholder={t('signin.Password')}
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

        <Touchable>
          <Text style={styles.forgotPass}>{t('signin.Forgot Password?')}</Text>
        </Touchable>

        <Touchable onPress={login}>
          <Text style={styles.btnLogin}>{t('signin.Log in')}</Text>
        </Touchable>

        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.orText}>{t('signin.Or Login with')}</Text>
          <View style={styles.line} />
        </View>

        <Touchable>
          <View style={styles.loginWithGoogle}>
            <Icons.GOOGLE />
            <Text style={styles.btnLoginGoogle}>
              {t('signin.Sign in with Google')}
            </Text>
          </View>
        </Touchable>

        <View style={styles.signUp}>
          <Text style={styles.account}>
            {t("signin.Don't have an account?")}
          </Text>
          <Touchable onPress={() => navigate('SignUp')}>
            <Text style={styles.signUpLabel}>{t('signin.SignUp')}</Text>
          </Touchable>
        </View>
      </ScrollView>
    </View>
  );
}

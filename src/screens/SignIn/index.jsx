import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {Icons} from '../../constants';
import Touchable from '../../components/Account/index';
import {navigate} from '../../navigations/RootNavigation';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_AUTH_CLIENT_ID} from '../../constants/auth';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import {useToggle} from '../../hooks';

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  //HOOKS
  const {t} = useTranslation();
  const [isVisible1, toggleVisibility1] = useToggle();

  const login = () => {
    console.log(phoneNumber);
    console.log(password);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_AUTH_CLIENT_ID,
      offlineAccess: true,
    });
  });

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the user's ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      // Get the user information
      const user = userCredential.user;
      console.log('User Info:', user);

      // Access user information
      const userId = user.uid;
      const userEmail = user.email;
      const userName = user.displayName;
      const userPhotoURL = user.photoURL;

      console.log(`User ID: ${userId}`);
      console.log(`Email: ${userEmail}`);
      console.log(`Name: ${userName}`);
      console.log(`Photo URL: ${userPhotoURL}`);
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            placeholder={t('signup.Phone Number')}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[styles.phoneNumber, styles.input]}
            keyboardType="phone-pad"
          />
        </View>

        <PrimaryInput
          label={t('signin.Password')}
          value={password}
          onChangeText={setPassword}
          placeholder={t('signin.Password')}
          secureTextEntry={true}
          showPassword={isVisible1}
          toggleShowPassword={toggleVisibility1}
          withEyeIcon={true}
        />

        <Touchable>
          <Text style={styles.forgotPass}>{t('signin.Forgot Password?')}</Text>
        </Touchable>

        <PrimaryButton
          onPress={login}
          title={t('signin.Log in')}
          containerStyle={styles.primaryButton}
        />

        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.orText}>{t('signin.Or Login with')}</Text>
          <View style={styles.line} />
        </View>

        <Touchable onPress={onGoogleButtonPress}>
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
    </KeyboardAvoidingView>
  );
}

import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {OtpInput} from 'react-native-otp-entry';
import {useTranslation} from 'react-i18next';
import {useRoute, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {phoneNumberWithoutZeroPrefix} from '../../helper';
import Touchable from '../../components/Account/index';
import {useCountdownResendOTPTimer} from '../../hooks';
import LoadingModal from '../../components/LoadingModal';
import Alert from '../../components/Alert';
import PrimaryButton from '../../components/PrimaryButton';

export default function VerificationOTP() {
  const {t} = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  const {phoneNumber, confirmation: initialConfirmation} = route.params || {};
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(initialConfirmation);
  const [loading, setLoading] = useState(false);
  const [alertLengthVisible, setAlertLengthVisible] = useState(false);
  const [alertInvalidVisible, setAlertInvalidVisible] = useState(false);

  const {remainingTime, isResending, setIsResending, startTimer} =
    useCountdownResendOTPTimer();

  async function confirmCode() {
    if (!confirmation) {
      console.error('[DEBUG] No confirmation object available.');
      return;
    }
    setLoading(true);
    // if (otp.length !== 6) {
    //   Alert.alert(
    //     t('otp.Input Problem'),
    //     t(
    //       'otp.The OTP you entered should be 6 digits long. Please check and try again.',
    //     ),
    //     [{text: t('otp.OK'), onPress: () => {}}],
    //   );
    //   setLoading(false);
    //   return;
    // }

    if (otp.length !== 6) {
      setAlertLengthVisible(true);
      setLoading(false);
      return;
    }

    try {
      const userCredential = await confirmation.confirm(otp);
      const user = userCredential.user;
      console.log('User authenticated successfully:', user);
      navigation.navigate('SignUp');
    } catch (error) {
      console.error('Error during OTP confirmation:', error);
      setAlertInvalidVisible(true);
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    if (isResending || remainingTime > 0) return;

    setIsResending(true);
    setLoading(true);

    try {
      const formattedPhoneNumber = `+855${phoneNumberWithoutZeroPrefix(
        phoneNumber,
      )}`;
      const newConfirmation = await auth().signInWithPhoneNumber(
        formattedPhoneNumber,
      );
      setConfirmation(newConfirmation);
      startTimer();
    } catch (error) {
      console.error('Error while resending code:', error);
      setIsResending(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.wrapper}>
          <Text style={styles.label}>{t('otp.Verification code')}</Text>
          <Text style={styles.infoLabel}>
            {t(
              'otp.We have sent an SMS with an activation code to your phone number',
            )}
            {phoneNumber}
          </Text>
          <OtpInput
            numberOfDigits={6}
            focusColor="black"
            focusStickBlinkingDuration={500}
            onTextChange={text => setOtp(text)}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />
        </View>

        <View style={styles.resendWrapper}>
          <Text style={styles.noCode}>
            {t('otp.Did not receive the code?')}
          </Text>
          <Touchable onPress={resendCode} disabled={remainingTime > 0}>
            <Text style={styles.resend}>
              {remainingTime > 0 ? `(${remainingTime}s)` : t('otp.Resend')}
            </Text>
          </Touchable>
        </View>

        <PrimaryButton
          onPress={() => confirmCode()}
          title={t('signup.Verify')}
          containerStyle={styles.primaryButton}
        />
      </SafeAreaView>

      <LoadingModal isVisible={loading} />
      <Alert
        visible={alertLengthVisible}
        title={t('otp.Input Problem')}
        message={t(
          'otp.The OTP you entered should be 6 digits long. Please check and try again.',
        )}
        buttonTitle={t('otp.OK')}
        onClose={() => setAlertLengthVisible(false)}
      />
      <Alert
        visible={alertInvalidVisible}
        title={t('otp.Check OTP')}
        message={t(
          'otp.The OTP you entered is incorrect. Please enter a valid 6-digit OTP.',
        )}
        buttonTitle={t('otp.OK')}
        onClose={() => setAlertInvalidVisible(false)}
      />
    </View>
  );
}

import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import {OtpInput} from 'react-native-otp-entry';
import {useTranslation} from 'react-i18next';
import Touchable from '../../components/Account/index';

export default function VerificationOTP() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.label}>{t('otp.Verification code')}</Text>
        <Text style={styles.infoLabel}>
          {t(
            "otp.We've send an SMS with an activation code to your phone number +855",
          )}
        </Text>
        <OtpInput
          numberOfDigits={6}
          focusColor="black"
          focusStickBlinkingDuration={500}
          onTextChange={text => console.log(text)}
          onFilled={text => console.log(`OTP is ${text}`)}
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
        <View style={styles.resendWrapper}>
          <Text style={styles.noCode}>
            {t("otp.Didn't Received the code?")}
          </Text>
          <Touchable>
            <Text style={styles.resend}>{t('otp.Resend')}</Text>
          </Touchable>
        </View>
      </SafeAreaView>
    </View>
  );
}

import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import Touchable from '../Account/index';
import {Icons} from '../../constants';

export default function PrimaryInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  showPassword,
  toggleShowPassword,
  withEyeIcon = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={withEyeIcon ? !showPassword : secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
        {withEyeIcon && (
          <Touchable onPress={toggleShowPassword}>
            {showPassword ? (
              <Icons.EYEOPEN width={25} height={25} style={styles.icon} />
            ) : (
              <Icons.EYECLOSE width={25} height={25} style={styles.icon} />
            )}
          </Touchable>
        )}
      </View>
    </View>
  );
}

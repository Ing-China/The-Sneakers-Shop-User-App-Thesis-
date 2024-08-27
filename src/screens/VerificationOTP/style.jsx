import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  wrapper: {
    padding: 15,
  },
  label: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.THIRDTY,
  },
  infoLabel: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.SIXTEEN,
    marginVertical: 15,
  },
  pinCodeText: {
    fontSize: Sizes.TWENTY,
    color: Colors.BLACK,
  },
  pinCodeContainer: {
    height: SCREEN_HEIGHT / 18,
    borderColor: 'black',
    borderRadius: 5,
  },
  activePinCodeContainer: {
    color: Colors.BLACK,
  },
  focusStick: {
    color: Colors.BLACK,
  },
  noCode: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.SIXTEEN,
  },
  resendWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resend: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.SIXTEEN,
  },
  primaryButton: {
    paddingTop: 20,
  },
});

export default styles;

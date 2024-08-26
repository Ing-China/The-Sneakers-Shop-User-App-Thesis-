import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 15,
  },
  label: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.THIRDTY,
    marginTop: 30,
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
    marginTop: 15,
  },
  resend: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.SIXTEEN,
  },
  btnLogin: {
    marginTop: 20,
    padding: 10,
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default styles;

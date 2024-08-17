import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 70,
  },
  logo: {
    height: hp('15%'),
    width: wp('40%'),
    resizeMode: 'contain',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signIn: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.THIRDTY,
  },
  Wrapper: {
    paddingHorizontal: 15,
  },
  inputLabel: {
    marginVertical: 10,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    paddingHorizontal: 15,
  },
  nameContainer: {
    paddingHorizontal: 15,
  },
  input1Container: {
    paddingHorizontal: 15,

    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.SILVER,
    borderRadius: 5,
    height: hp('5.5%'),
  },
  inputError: {
    borderColor: 'red',
  },
  camboLabel: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    textAlign: 'center',
  },
  cambo: {
    flex: 0.3,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  phoneNumber: {
    flex: 0.7,
  },
  input2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: hp('5.5%'),
    borderColor: Colors.SILVER,
  },
  password: {
    flex: 1,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },
  btnLogin: {
    marginTop: 40,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },

  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  account: {
    color: Colors.SILVER,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
  signUpLabel: {
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
});

export default styles;

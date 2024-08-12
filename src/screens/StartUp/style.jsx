import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts, Sizes} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: hp('25%'),
    width: wp('60%'),
    resizeMode: 'contain',
  },
  labelVersion: {
    fontSize: Sizes.EIGHTEEN,
    color: Colors.SILVER,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
  },
  powerByContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30,
  },
  labelPoweredBy: {
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
  },
});
export default styles;

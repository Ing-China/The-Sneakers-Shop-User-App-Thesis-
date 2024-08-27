import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts, Sizes} from '../../constants';
const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    width: wp('25%'),
    height: hp('12%'),
    justifyContent: 'center',
    backgroundColor: Colors.LIGHTSILVER,
  },
  image: {
    width: wp('25%'),
    height: hp('10%'),
  },
  name: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts, Sizes} from '../../constants';

const styles = StyleSheet.create({
  container: {},
  imageWrapper: {
    width: wp('40%'),
    height: hp('13%'),
    backgroundColor: Colors.LIGHTSILVER,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('30%'),
    height: hp('10%'),
  },
  nameWrapper: {
    backgroundColor: Colors.BLACK,
  },
  name: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.SIXTEEN,
    color: Colors.WHITE,
    padding: 2,
    marginLeft: 5,
  },
});
export default styles;

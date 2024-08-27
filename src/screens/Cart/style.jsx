import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
  items: {
    color: Colors.SILVER,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
  checkoutWrapper: {
    position: 'absolute',
    bottom: 0,
    height: hp(13),
    width: wp(100),
    backgroundColor: Colors.WHITE,
  },
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  totalLabel: {
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
  price: {
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
});

export default style;

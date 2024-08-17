import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  discountWrapper: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  discountState: {
    position: 'absolute',
  },
  discount: {
    textAlign: 'center',
    lineHeight: 12,
    fontFamily: Fonts.REGULAR,
    color: Colors.WHITE,
    fontSize: Sizes.FIFTEEN,
  },
  favoriteWrapper: {
    backgroundColor: Colors.WHITE,
    padding: 5,
    borderRadius: 50,
    position: 'absolute',
    margin: 5,
    right: 0,
    zIndex: 1,
  },
  image: {
    width: wp('40%'),
    height: hp('15%'),
  },
  name: {
    width: wp('35%'),
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.EIGHTEEN,
    color: Colors.SILVER,
    textDecorationLine: 'line-through',
  },
  priceAfterDiscount: {
    width: wp('15%'),
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.TWENTYFIVE,
    color: Colors.BLACK,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts, Sizes} from '../../constants';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageWrapper: {
    paddingRight: 5,
    width: '25%',
    alignItems: 'center',
  },
  body: {
    width: '75%',
  },
  image: {
    width: wp('22%'),
    height: hp('10%'),
  },
  name: {
    width: '90%',
    paddingBottom: 5,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
  },
  iconDelete: {
    position: 'absolute',
    right: 0,
  },
  quantityWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
  },
  discount: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.SEVENTEEN,
    color: Colors.SILVER,
    textDecorationLine: 'line-through',
    paddingLeft: 10,
  },
  quantity: {
    paddingHorizontal: 10,
    fontSize: Sizes.SEVENTEEN,
    color: Colors.BLACK,
  },
  size: {
    paddingBottom: 5,
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.SEVENTEEN,
    color: Colors.SILVER,
  },
});

export default style;

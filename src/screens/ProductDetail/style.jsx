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
  imageContainer: {
    height: hp(30),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  name: {
    fontSize: Sizes.TWENTY,
    fontFamily: Fonts.MEDIUM,
    color: Colors.BLACK,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  price: {
    fontSize: Sizes.TWENTYFIVE,
    fontFamily: Fonts.MEDIUM,
    color: Colors.BLACK,
    marginRight: 10,
  },
  discount: {
    fontSize: Sizes.EIGHTEEN,
    fontFamily: Fonts.MEDIUM,
    color: Colors.SILVER,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    borderWidth: 0.3,
    borderColor: Colors.SILVER,
  },
  sizeLabel: {
    fontSize: Sizes.EIGHTEEN,
    fontFamily: Fonts.MEDIUM,
    color: Colors.BLACK,
  },
  sizeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  size: {
    fontSize: Sizes.EIGHTEEN,
    fontFamily: Fonts.MEDIUM,
    color: Colors.BLACK,
    marginRight: 5,
  },
  sizeModalContainer: {
    // paddingHorizontal: 15,
  },
  SelectLabel: {
    fontSize: Sizes.TWENTY,
    fontFamily: Fonts.MEDIUM,
    color: Colors.BLACK,
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default style;

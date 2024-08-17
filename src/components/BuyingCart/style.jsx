import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },
  transaction: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },

  sellLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: Colors.LIGHTSILVER,
    borderRadius: 10,
    width: wp('15%'),
    height: hp('6.5%'),
    justifyContent: 'center',
    marginRight: 5,
  },
  image: {
    width: wp('15%'),
    height: hp('5%'),
  },
  mainWrapper: {
    justifyContent: 'center',
  },
  nameQTYWrapper: {
    flexDirection: 'row',
  },
  productName: {
    width: wp('40%'),
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },
  productQuantity: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },
  productPrice: {
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },
});
export default styles;

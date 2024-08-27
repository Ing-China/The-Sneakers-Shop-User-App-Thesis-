import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts, Sizes} from '../../constants';
const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.SILVER,
    borderBottomWidth: 0.5,
  },
  wrapper: {
    flexDirection: 'row',
    padding: 15,
  },
  nameWrapper: {
    justifyContent: 'center',
  },
  name: {
    width: wp('69%'),
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
  description: {
    width: wp('69%'),
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
    fontFamily: Fonts.REGULAR,
  },
  imageWrapper: {
    borderWidth: 0.5,
    borderColor: Colors.SILVER,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 15,
  },
  image: {
    width: wp('20%'),
    height: hp('10%'),
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const style = StyleSheet.create({
  imageContainer: {
    height: hp('50%'),
    width: wp('100%'),
  },
  image: {
    height: hp('50%'),
    width: wp('100%'),
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F1F2F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;

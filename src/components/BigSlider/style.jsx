import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  imageContainer: {
    width: wp('100%'),
    height: hp('40%'),
  },
  image: {
    height: hp('40%'),
    width: wp('100%'),
  },
});

export default styles;

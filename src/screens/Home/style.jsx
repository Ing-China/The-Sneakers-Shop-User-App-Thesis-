import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  imgContainer: {
    width: wp('100%'),
    height: hp('25%'),
  },
  image: {
    height: hp('25%'),
    width: wp('100%'),
    resizeMode: 'stretch',
  },
});

export default styles;

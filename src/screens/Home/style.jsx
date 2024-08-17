import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts, Sizes} from '../../constants';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  recomLabel: {
    padding: 15,
    fontSize: Sizes.TWENTY,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
  },
});

export default styles;

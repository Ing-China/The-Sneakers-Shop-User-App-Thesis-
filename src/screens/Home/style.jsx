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
  seeAllBrand: {
    padding: 15,
    fontSize: Sizes.EIGHTEEN,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.BLACK,
  },
  brandWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navigateWrapper: {
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  haha: {
    backgroundColor: 'red',
  },
  bigSliderContainer: {
    paddingTop: 20,
  },
});

export default styles;

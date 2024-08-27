import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  label: {
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
  items: {
    color: Colors.SILVER,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
  },
});
export default style;

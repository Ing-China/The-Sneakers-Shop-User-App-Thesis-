import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  discountLabel: {
    color: Colors.WHITE,
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.SEVENTEEN,
  },
});
export default style;

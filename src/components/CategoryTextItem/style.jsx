import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

const styles = StyleSheet.create({
  container: {},
  name: {
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
    padding: 10,
  },
  underline: {
    height: 2,
    backgroundColor: Colors.BLACK,
  },
});

export default styles;

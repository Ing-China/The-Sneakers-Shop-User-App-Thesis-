import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    color: Colors.BLACK,
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.EIGHTEEN,
  },
});

export default styles;

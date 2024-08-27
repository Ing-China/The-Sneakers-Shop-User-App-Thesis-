import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

const style = StyleSheet.create({
  container: {},
  label: {
    marginHorizontal: 15,
    padding: 10,
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
export default style;

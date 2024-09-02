import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    paddingHorizontal: 15,
    borderColor: Colors.SILVER,
  },
  input: {
    width: '90%',
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.EIGHTEEN,
    paddingVertical: 10,
    color: Colors.BLACK,
  },
  category: {
    borderColor: Colors.SILVER,
    borderBottomWidth: 0.2,
  },
});

export default styles;

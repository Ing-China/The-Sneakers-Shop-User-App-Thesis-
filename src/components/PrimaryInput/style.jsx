import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  label: {
    marginVertical: 10,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    height: hp('5.5%'),
    borderColor: Colors.SILVER,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default style;

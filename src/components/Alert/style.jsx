import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  alertContainer: {
    width: wp('75%'),
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.TWENTY,
    padding: 10,
    textAlign: 'center',
  },
  message: {
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.EIGHTEEN,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 25,
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  buttonTitle: {
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.EIGHTEEN,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default style;

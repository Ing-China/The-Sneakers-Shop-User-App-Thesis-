import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  settingContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.SILVER,
  },
  settingWrapper: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  settingText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.TWENTY,
    color: Colors.BLACK,
  },
  contentContainer: {
    padding: 15,
  },
  langLabel: {
    fontSize: Sizes.TWENTY,
    fontFamily: Fonts.MEDIUM,
    color: Colors.BLACK,
    textAlign: 'center',
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: Colors.SILVER,
  },
  languageWrapper: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  langText: {
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.TWENTY,
    color: Colors.BLACK,
  },

  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    height: hp('16%'),
    width: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 90,
  },
  image: {
    height: hp('16%'),
    width: wp('35%'),
  },
  name: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.TWENTY,
  },
});

export default styles;

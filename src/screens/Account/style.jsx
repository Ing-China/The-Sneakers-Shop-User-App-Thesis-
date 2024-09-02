import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 0 : 30,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  imageContainer: {
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    height: 160,
    width: 160,
  },
  name: {
    fontFamily: Fonts.SEMIBOLD,
    fontSize: Sizes.TWENTY,
    marginTop: 10,
    color: Colors.BLACK,
  },
  settingContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.SILVER,
  },
  containerStyle: {
    marginBottom: 30,
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
});

export default styles;

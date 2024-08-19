import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';

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
  label: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.TWENTY,
    color: Colors.BLACK,
  },
});

export default styles;

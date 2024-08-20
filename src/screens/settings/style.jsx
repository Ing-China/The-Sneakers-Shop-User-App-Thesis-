import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';

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
    flex: 1,
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Sizes.TWENTY,
    color: Colors.BLACK,
    textAlign: 'center',
  },
  line: {
    height: 1,
    backgroundColor: Colors.SILVER,
    marginVertical: 15,
  },
  text: {
    paddingHorizontal: 15,
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.EIGHTEEN,
    color: Colors.BLACK,
    lineHeight: 23,
  },

  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    gap: 15,
  },
  buttonWhite: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonBlack: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderWidth: 1,
  },
  confirm: {
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.EIGHTEEN,
    color: Colors.WHITE,
  },
  cancel: {
    fontFamily: Fonts.REGULAR,
    fontSize: Sizes.EIGHTEEN,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
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
  editContainer: {
    position: 'absolute',
    right: wp('3%'),
    bottom: hp('1%'),
    backgroundColor: Colors.BLACK,
    padding: 5,
    borderRadius: 100,
  },

  inputLabel: {
    marginVertical: 10,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    paddingHorizontal: 15,
  },
  nameContainer: {
    paddingHorizontal: 15,
  },
  input: {
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK,
    fontSize: Sizes.EIGHTEEN,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.SILVER,
    borderRadius: 5,
    height: hp('5.5%'),
  },
  btnLogin: {
    marginHorizontal: 15,
    marginTop: 30,
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

export default styles;

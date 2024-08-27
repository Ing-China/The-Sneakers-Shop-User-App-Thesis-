import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
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
  primaryButton: {
    paddingTop: 35,
  },
});

export default styles;

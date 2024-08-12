import React from 'react';
import HomeIcon from '../../assets/icons/home_icon.svg';
import SearchIcon from '../../assets/icons/search_icon.svg';
import FavoriteIcon from '../../assets/icons/favorite_icon.svg';
import NotificationIcon from '../../assets/icons/notification_icon.svg';
import UserIcon from '../../assets/icons/user.svg';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import Setting from '../../assets/icons/setting.svg';
import logout from '../../assets/icons/logout.svg';
import store from '../../assets/icons/store.svg';
import box from '../../assets/icons/box.svg';
import translate from '../../assets/icons/translate.svg';
import cambo from '../../assets/icons/cambo.svg';
import uk from '../../assets/icons/uk.svg';
import check from '../../assets/icons/check.svg';
import logo from '../../assets/icons/logo.svg';
import copyright from '../../assets/icons/copyright.svg';

export default class Icons {
  static HOME = props => <HomeIcon {...props} />;
  static SEARCH = props => <SearchIcon {...props} />;
  static FAVORITE = props => <FavoriteIcon {...props} />;
  static NOTIFICATION = props => <NotificationIcon {...props} />;
  static USER = props => <UserIcon {...props} />;
  static ARROWRIGHT = ArrowRight;
  static SETTING = Setting;
  static LOGOUT = logout;
  static STORE = store;
  static BOX = box;
  static TRANSLATE = translate;
  static CAMBO = cambo;
  static UK = uk;
  static CHECK = check;
  static LOGO = logo;
  static COPYRIGHT = copyright;
}

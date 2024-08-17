import {View, useWindowDimensions} from 'react-native';

import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Colors, Fonts, Sizes} from '../../constants';
import History from './History';
import Orders from './Order,';
import {useTranslation} from 'react-i18next';

export default function Buying() {
  const {t} = useTranslation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const renderScene = SceneMap({
    Orders: Orders,
    History: History,
  });

  const [routes] = React.useState([
    {key: 'Orders', title: t('buying.Orders')},
    {key: 'History', title: t('buying.History')},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Colors.BLACK}}
      activeColor="black"
      inactiveColor="silver"
      style={{
        backgroundColor: Colors.WHITE,
        elevation: 0,
        shadowOpacity: 0,
        borderWidth: 0,
      }}
      pressColor="transparent"
      labelStyle={{
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Sizes.EIGHTEEN,
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

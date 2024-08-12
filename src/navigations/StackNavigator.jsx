import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/settings';
import Address, {
  screenOptions as AddressScreenOptions,
} from '../screens/Address';
import BottomTabNavigator from './BottomTabNavigator';
import {useTranslation} from 'react-i18next';
import {Colors, Fonts, Sizes} from '../constants';
import AboutUs from '../screens/AboutUs';

export default function StackNavigator() {
  const Stack = createStackNavigator();
  const {t} = useTranslation();

  const defaultNavOptions = {
    headerBackTitle: t('tab.Back'),
    headerTintColor: Colors.BLACK,

    headerTitleStyle: {
      fontSize: Sizes.TWENTY,
      color: Colors.BLACK,
      fontFamily: Fonts.MEDIUM,
    },
    headerBackTitleVisible: false,
  };

  return (
    <Stack.Navigator screenOptions={defaultNavOptions} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: t('tab.Settings')}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{title: t('tab.Address')}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

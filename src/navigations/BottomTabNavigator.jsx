import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../screens/Search';
import Favotie from '../screens/Favorite';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Account from '../screens/Account';
import {Colors, Fonts, Icons, Sizes} from '../constants';

import {useTranslation} from 'react-i18next';
import Address from '../screens/Address';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Icons.HOME
              width={size}
              height={size}
              color={focused ? Colors.PRIMARY : Colors.BLACK}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Icons.SEARCH
              width={size}
              height={size}
              color={focused ? Colors.PRIMARY : Colors.BLACK}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favotie}
        options={{
          title: t('tab.Favorite'),
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: Sizes.TWENTYFIVE,
            color: Colors.BLACK,
            fontFamily: Fonts.MEDIUM,
          },
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          },
          tabBarIcon: ({focused, size}) => (
            <Icons.FAVORITE
              width={size}
              height={size}
              color={focused ? Colors.PRIMARY : Colors.BLACK}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: t('tab.Notification'),
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: Sizes.TWENTYFIVE,
            color: Colors.BLACK,
            fontFamily: Fonts.MEDIUM,
          },
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          },
          tabBarIcon: ({focused, size}) => (
            <Icons.NOTIFICATION
              width={size}
              height={size}
              color={focused ? Colors.PRIMARY : Colors.BLACK}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={({route}) => ({
          title: t('tab.Account'),
          // headerTitleAlign: 'left',
          headerShown: false,
          // headerTitleStyle: {
          //   fontSize: Sizes.TWENTYFIVE,
          //   color: Colors.BLACK,
          //   fontFamily: Fonts.MEDIUM,
          // },
          // headerStyle: {
          //   shadowColor: '#000',
          //   shadowOffset: {
          //     width: 0,
          //     height: 1,
          //   },
          //   shadowOpacity: 0.18,
          //   shadowRadius: 1.0,

          //   elevation: 1,
          // },
          tabBarIcon: ({focused, size}) => (
            <Icons.USER
              width={size}
              height={size}
              color={focused ? Colors.PRIMARY : Colors.BLACK}
            />
          ),
          tabBarLabel: () => null,
        })}
      />
    </Tab.Navigator>
  );
}

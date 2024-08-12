import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../screens/Search';
import Favotie from '../screens/Favorite';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Account from '../screens/Account';
import {Colors, Fonts, Icons, Sizes} from '../constants';

import Settings from '../screens/settings';
import {useTranslation} from 'react-i18next';
import Address from '../screens/Address';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const {t} = useTranslation();

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  const AccountStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={Account}
          options={({route}) => ({
            title: t('tab.Account'),
            headerShown: route.name === 'Settings' ? false : true,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: Sizes.TWENTYFIVE,
              color: Colors.BLACK,
              fontFamily: Fonts.MEDIUM,
            },
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerBackTitle: t('tab.Back'),
            headerTintColor: Colors.BLACK,
            title: t('tab.Settings'),
            headerTitleStyle: {
              fontSize: Sizes.TWENTY,
              color: Colors.BLACK,
              fontFamily: Fonts.MEDIUM,
            },
            headerBackTitleStyle: {
              fontFamily: Fonts.REGULAR,
            },
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerBackTitle: t('tab.Back'),
            headerTintColor: Colors.BLACK,
            title: t('tab.Settings'),
            headerTitleStyle: {
              fontSize: Sizes.TWENTY,
              color: Colors.BLACK,
              fontFamily: Fonts.MEDIUM,
            },
            headerBackTitleStyle: {
              fontFamily: Fonts.REGULAR,
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
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
        name="Favorite"
        component={Favotie}
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
        name="Search"
        component={Search}
        options={{
          headerShown: false,
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
          headerShown: false,
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
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: Sizes.TWENTYFIVE,
            color: Colors.BLACK,
            fontFamily: Fonts.MEDIUM,
          },
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

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Address, {
  screenOptions as AddressScreenOptions,
} from '../screens/Address';
import BottomTabNavigator from './BottomTabNavigator';
import {useTranslation} from 'react-i18next';
import {Colors, Fonts, Icons, Sizes} from '../constants';
import AboutUs from '../screens/AboutUs';
import Buying from '../screens/Buying';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import VerificationOTP from '../screens/VerificationOTP';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import ProductDetail from '../screens/ProductDetail';
import Touchable from '../components/Account/index';
import {navigate} from './RootNavigation';
import {View} from 'react-native';
import Gallary from '../screens/Gallary';
import Settings from '../screens/Settings';

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
    headerTitleAlign: 'center',
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
        options={{
          title: t('tab.Settings'),
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
        }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          title: t('tab.Address'),
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
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: null,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: null,
          headerTransparent: true,
          headerRight: () => (
            <View style={{marginRight: 10, marginTop: 5}}>
              <Touchable onPress={() => navigate('Cart')}>
                <Icons.CART />
              </Touchable>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: t('tab.Cart'),
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
        }}
      />
      <Stack.Screen
        name="Buying"
        component={Buying}
        options={{
          title: t('tab.Buying'),
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
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t('tab.Profile'),
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
        }}
      />

      <Stack.Screen
        name="Gallary"
        component={Gallary}
        options={{
          title: t('tab.Product Image'),
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
        }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationOTP"
        component={VerificationOTP}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

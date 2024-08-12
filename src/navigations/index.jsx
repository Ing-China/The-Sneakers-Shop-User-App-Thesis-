import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import StartUp from '../screens/StartUp';
import {navigationRef} from './RootNavigation';
import StackNavigator from './StackNavigator';

export default function AppNavigator() {
  const [isStartup, setIsStartup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStartup(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderedNavigation = useMemo(() => {
    return isStartup ? <StartUp /> : <StackNavigator />;
  }, [isStartup]);

  return (
    <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef}>
        <BottomSheetModalProvider>
          {renderedNavigation}
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './navigation/rootNav';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './theme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import {setCustomText} from 'react-native-global-props';

SplashScreen.preventAutoHideAsync();


function App() {
  const isDark = false;

  return (
      <NavigationContainer>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <RecoilRoot>
            <RootNav />
          </RecoilRoot>
        </ThemeProvider>
      </NavigationContainer>
  );
}

export default App;
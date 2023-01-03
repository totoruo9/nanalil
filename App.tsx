import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './navigation/rootNav';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './theme';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import {setCustomText} from 'react-native-global-props';
import { getAuth } from '@firebase/auth';
import { fireStoreDB } from './firebaseConfig';

SplashScreen.preventAutoHideAsync();

function App() {
  const isDark = false;
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = Font.useFonts({
    'pretendard-thin': require('./assets/fonts/static/Pretendard-Thin.otf'),
    'pretendard-extralight': require('./assets/fonts/static/Pretendard-ExtraLight.otf'),
    'pretendard-light': require('./assets/fonts/static/Pretendard-Light.otf'),
    'pretendard-regular': require('./assets/fonts/static/Pretendard-Regular.otf'),
    'pretendard-medium': require('./assets/fonts/static/Pretendard-Medium.otf'),
    'pretendard-semibold': require('./assets/fonts/static/Pretendard-SemiBold.otf'),
    'pretendard-bold': require('./assets/fonts/static/Pretendard-Bold.otf'),
    'pretendard-extrabold': require('./assets/fonts/static/Pretendard-ExtraBold.otf'),
    'pretendard-black': require('./assets/fonts/static/Pretendard-Black.otf'),
    'pretendard' : require('./assets/fonts/PretendardVariable.ttf')
  });
  const [authReady, setAuthReady] = useState(false);

  const auth = getAuth();
  console.log(auth);

  const preloading = async() => {
    setAppIsReady(true);
  };

  useEffect(() => {
    preloading();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
        const customTextProps = {
          style: {
            fontFamily: 'pretendard-regular'
          }
        }

        setCustomText(customTextProps);
        await SplashScreen.hideAsync();
    };
  }, [appIsReady, !fontsLoaded, authReady]);

  if(appIsReady && !fontsLoaded) {
    return (
      <Text>
        loading...
      </Text>
    )
  }
  
  return (
      <>
        <View onLayout={onLayoutRootView}></View>
        <NavigationContainer>
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <RecoilRoot>
              <RootNav />
            </RecoilRoot>
          </ThemeProvider>
        </NavigationContainer>
      </>
  );
}

export default App;
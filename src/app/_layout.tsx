import { Stack } from 'expo-router';
import { useDeviceContext } from 'twrnc';

import tw from '../libs/tw';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import CustomSplashScreen from '../screens/CustomSplashScreen';
import { StatusBar } from 'expo-status-bar';
import { useInitTheme } from '../hooks/useInitTheme';

import '../global.css';

const RootLayout = () => {
  useDeviceContext(tw);

  const [isReady, setIsReady] = useState(false);

  const { colorScheme } = useColorScheme();
  useInitTheme(); // dùng hook mới nè

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <GestureHandlerRootView style={tw`flex-1`}>
        <BottomSheetModalProvider>
          {isReady ? (
            <Stack screenOptions={{ animation: 'fade_from_bottom' }}>
              <Stack.Screen
                name="index"
                options={{
                  headerShown: false,
                  // contentStyle: { backgroundColor: 'red' },
                }}
              />
              <Stack.Screen
                name="(auth)/register"
                options={{ presentation: 'modal' }}
              />
              <Stack.Screen
                name="(auth)/login"
                options={{ presentation: 'modal' }}
              />
              <Stack.Screen
                name="(auth)/blank"
                options={{ presentation: 'modal' }}
              />

              <Stack.Screen name="welcome" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          ) : (
            <CustomSplashScreen />
          )}
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default RootLayout;

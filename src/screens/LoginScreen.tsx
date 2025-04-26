import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import WelcomeLayout from '../components/layouts/WelcomeLayout';
import LottieView from 'lottie-react-native';

import tw from '../libs/tw';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { title } from 'process';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import InputField from '../components/ui/InputField';
import { useColorScheme } from 'nativewind';
import { moderateScale } from 'react-native-size-matters';

const LoginScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const { colorScheme } = useColorScheme();

  useEffect(() => {
    if (navigation) navigation.setOptions({ title: 'Login' });
  }, [navigation]);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Login',
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="close"
                size={24}
                color={tw.color('black')}
                onPress={() => {
                  router.back();
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <WelcomeLayout>
        <View
          style={tw.style(
            'flex-1 justify-center items-center android:p-20 ios:p-10 tablet:px-50'
          )}
        >
          <LottieView
            source={require('../assets/lotties/login.json')}
            style={tw.style('w-[40%] h-[40%]')}
            autoPlay
            speed={0.75}
            loop={false}
            resizeMode="contain"
          />

          <View style={tw.style('flex-1 self-stretch')}>
            <Text
              style={tw.style(
                'text-3xl tablet:text-5xl text-primary dark:text-white uppercase text-center font-bold mb-2'
              )}
            >
              Login
            </Text>
            <View style={tw.style('gap-2')}>
              <InputField
                paddingStyle={styles.buttonPaddingStyle}
                placeholder="Email"
                placeholderTextColor={tw.color('gray')}
              />
              <InputField
                paddingStyle={styles.buttonPaddingStyle}
                placeholder="Password"
                placeholderTextColor={tw.color('gray')}
              />

              <PrimaryButton
                title="Login"
                icon="person-circle"
                iconSize={moderateScale(22)}
                iconColor={
                  colorScheme === 'dark'
                    ? tw.color('primary-light')
                    : tw.color('primary-dark')
                }
                buttonStyles={styles.button}
                paddingStyles={styles.buttonPaddingStyle}
                titleStyles={styles.buttonTitle}
                rippleStyles={tw.color('primary-dark')}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </WelcomeLayout>
    </>
  );
};

export default LoginScreen;

const styles = {
  buttonPaddingStyle: 'py-2 tablet:py-4',

  button: 'bg-black dark:bg-white rounded-lg',
  buttonTitle: 'text-base tablet:text-2xl text-white dark:text-primary',
};

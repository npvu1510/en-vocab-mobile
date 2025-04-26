// app/welcome.tsx
import { Link, useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import PrimaryButton from '../components/ui/PrimaryButton';
import WelcomeLayout from '../components/layouts/WelcomeLayout';
import AppName from '../components/AppName';

import { useAppStore } from '../hooks/useAppStorage';

import { moderateScale } from 'react-native-size-matters';

import tw from '../libs/tw';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

const WelcomeScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const router = useRouter();
  const setHasSeenWelcome = useAppStore((state) => state.setHasSeenWelcome);

  const goHomePageHandler = () => {
    setHasSeenWelcome(true);

    router.replace('/(tabs)/home');
  };

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  return (
    <WelcomeLayout>
      <View style={tw`flex-1 android:p-20 ios:p-10 tablet:px-30`}>
        <AppName />
        <Animated.View
          style={tw`flex-1 justify-end `}
          entering={FadeInDown.delay(500).duration(250).springify()}
        >
          <PrimaryButton
            title="Continue as a guest"
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
            onPress={goHomePageHandler}
          />
        </Animated.View>

        <View style={tw`flex-1 justify-end`}>
          <View style={tw`self-stretch gap-2 tablet:gap-4`}>
            <Animated.View
              entering={FadeInDown.delay(750).duration(250).springify()}
            >
              <Link href={'/(auth)/login'} asChild>
                <PrimaryButton
                  title="Continue with Google"
                  icon="logo-google"
                  iconSize={moderateScale(22)}
                  iconColor={
                    colorScheme === 'dark'
                      ? tw.color('primary-light')
                      : tw.color('primary-dark')
                  }
                  buttonStyles={styles.socialButton}
                  paddingStyles={styles.buttonPaddingStyle}
                  titleStyles={styles.socialButtonTitle}
                  rippleStyles={tw.color('primary-light-transparent')}
                  onPress={() => {}}
                />
              </Link>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(1000).duration(250).springify()}
            >
              <Link href={'/(auth)/blank'} asChild>
                <PrimaryButton
                  title="Continue with Apple ID"
                  icon="logo-apple"
                  iconSize={moderateScale(22)}
                  iconColor={
                    colorScheme === 'dark'
                      ? tw.color('primary-light')
                      : tw.color('primary-dark')
                  }
                  buttonStyles={styles.socialButton}
                  paddingStyles={styles.buttonPaddingStyle}
                  titleStyles={styles.socialButtonTitle}
                  rippleStyles={tw.color('primary-light-transparent')}
                  // onPress={() => {}}
                  onPress={() => {
                    console.log('toggleColorScheme');
                    toggleColorScheme();
                  }}
                />
              </Link>
            </Animated.View>
          </View>
          <View style={tw.style('pt-2 tablet:pt-4')}>
            <Link href="(auth)/register">
              <Text style={tw.style(styles.haveAnAccountText)}>
                You don't have an account? Register
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </WelcomeLayout>
  );
};

const styles = {
  buttonPaddingStyle: 'py-3 tablet:py-5',

  button: 'bg-black dark:bg-white rounded-lg',
  buttonTitle: 'text-base tablet:text-2xl text-white dark:text-primary',

  socialButton: `bg-transparent border-4 border-primary-dark-transparent dark:border-black-transparent rounded-3xl `,
  socialButtonTitle: `text-base tablet:text-2xl text-primary-dark dark:text-primary-light`,

  haveAnAccountText:
    'text-sm tablet:text-xl text-center text-black dark:text-white italic',
};
export default WelcomeScreen;

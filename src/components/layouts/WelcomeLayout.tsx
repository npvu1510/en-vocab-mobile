import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Appearance,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../../libs/tw';
import { useColorScheme } from 'nativewind';
const WelcomeLayout = ({ children }) => {
  const { colorScheme } = useColorScheme();

  return (
    <ImageBackground
      source={require('../../assets/welcome-background.jpg')}
      style={tw`flex-1`}
      resizeMode="cover"
    >
      <LinearGradient
        colors={[
          colorScheme === 'dark'
            ? tw.color('black-transparent')
            : tw.color('white-transparent'),
          colorScheme === 'dark'
            ? tw.color('primary-dark')
            : tw.color('primary-light'),
        ]}
        style={tw`flex-1`}
      >
        <SafeAreaView style={tw`flex-1`}>
          <View style={tw`flex-1`}>
            <View style={tw`flex-1`}>{children}</View>
            <View style={tw`items-center`}>
              <Text style={tw`text-xxs tablet:text-lg text-white pb-1.5`}>
                © 2025 enVocab · v1.0.0
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WelcomeLayout;

import { View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

import tw from '../libs/tw';

const AppName = () => {
  return (
    <View style={tw`justify-center self-stretch`}>
      <Animated.Text
        style={tw`text-primary-light dark:text-primary-dark text-app-name  tablet:text-app-name-tablet text-center font-bold`}
        entering={FadeInRight.delay(250).duration(250).springify()}
      >
        enVocab
      </Animated.Text>
      <Animated.Text
        style={tw`text-black dark:text-white text-base tablet:text-3xl text-center text-base  italic`}
        entering={FadeInRight.delay(500).duration(250).springify()}
      >
        No pain, no gain
      </Animated.Text>
    </View>
  );
};

export default AppName;

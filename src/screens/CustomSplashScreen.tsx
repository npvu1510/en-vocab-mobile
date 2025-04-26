import LottieView from 'lottie-react-native';
import WelcomeLayout from '../components/layouts/WelcomeLayout';
import AppName from '../components/AppName';

import tw from '../libs/tw';
import { View } from 'react-native';

const CustomSplashScreen = () => {
  return (
    <>
      <WelcomeLayout>
        <View style={tw`flex-1 android:p-20 ios:p-10`}>
          <AppName />
          <LottieView
            source={require('../assets/lotties/1.json')}
            resizeMode="cover"
            autoPlay
            loop={true}
            style={styles.lottie}
          />
        </View>
      </WelcomeLayout>
    </>
  );
};

const styles = {
  lottie: tw`flex-1`,
};

export default CustomSplashScreen;

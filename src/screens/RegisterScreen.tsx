import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import WelcomeLayout from '../components/layouts/WelcomeLayout';
import LottieView from 'lottie-react-native';

import tw from '../libs/tw';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const RegisterScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation) navigation.setOptions({ title: 'Register' });
  }, [navigation]);

  return (
    <WelcomeLayout>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0} // tuỳ chỉnh nếu cần
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.screen}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <LottieView
                source={require('../assets/lotties/register.json')}
                style={styles.lotties}
                autoPlay
                loop={false}
              />

              <View style={styles.registerContainer}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.textInputsContainer}>
                  <TextInput placeholder="Full name" style={styles.textInput} />
                  <TextInput placeholder="Email" style={styles.textInput} />
                  <TextInput placeholder="Password" style={styles.textInput} />
                  <TextInput
                    placeholder="Confirm password"
                    style={styles.textInput}
                  />
                  <PrimaryButton
                    title="Register"
                    icon={false}
                    iconSize={18}
                    onPress={() => {}}
                    buttonStyles={styles.button}
                    titleStyles={styles.buttonTitle}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </WelcomeLayout>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    ...tw`px-5`, // nếu Vũ muốn padding ngang
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 24, // tuỳ chỉnh
  },
  container: tw`py-5 flex-1 justify-center items-center`,

  lotties: tw`w-[40%] h-[40%]`,
  // lotties: tw`w-[40%] h-[40%]`,

  registerContainer: tw`flex-1 self-stretch px-5`,

  title: tw`text-center text-[20px] text-black-light font-bold mb-2`,

  textInputsContainer: tw`gap-2`,
  textInput: tw`bg-white py-3 px-4 rounded-md`,

  button: tw`bg-black`,
  buttonTitle: tw`text-primary-light`,
});

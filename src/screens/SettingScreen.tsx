// src/screens/SettingScreen.tsx
import { Text, View, Pressable } from 'react-native';
import tw from '../libs/tw';
import { useColorScheme } from 'nativewind';
import { Sun, Moon } from 'lucide-react-native';
import { useAppStore } from '../hooks/useAppStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { moderateScale } from 'react-native-size-matters';
import { style } from 'twrnc';

const SettingScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { setTheme } = useAppStore();

  const toggleColorScheme = () => {
    const newTheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newTheme); // nativewind
    setTheme(newTheme); // lưu AsyncStorage
  };

  const clearCache = async () => {
    try {
      await AsyncStorage.removeItem('app-storage');
      Alert.alert('Success', 'Cache cleared!');
    } catch (error) {
      console.error('Failed to clear cache', error);
      Alert.alert('Error', 'Failed to clear cache.');
    }
  };

  return (
    <View
      style={tw.style(
        'flex-1 justify-between bg-white dark:bg-black p-5 tablet:p-12'
      )}
    >
      <View style={tw.style('flex-row justify-between items-center')}>
        <Text
          style={tw.style('text-base font-bold text-black dark:text-white')}
        >
          Theme: {colorScheme === 'dark' ? 'Dark' : 'Light'}
        </Text>

        <Pressable onPress={toggleColorScheme} style={tw.style('p-2')}>
          {colorScheme === 'dark' ? (
            <Sun size={28} color={tw.color('white')} />
          ) : (
            <Moon size={28} color={tw.color('black')} />
          )}
        </Pressable>
      </View>

      <View style={tw.style('bg-red-200 justify-center items-center')}>
        <PrimaryButton
          title="Clear cache"
          icon="trash"
          iconSize={moderateScale(22)}
          iconColor={tw.color('primary-dark')}
          buttonStyles={'bg-gray-light self-stretch'}
          paddingStyles={'p-2 p-4'}
          titleStyles={'text-gray-dark'}
          rippleStyles={tw.color('primary-dark')}
          onPress={clearCache}
        />
      </View>
    </View>
  );
};

export default SettingScreen;

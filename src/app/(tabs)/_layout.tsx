import { Tabs } from 'expo-router';

import HomeTabBar from '../../components/ui/HomeTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '../../libs/tw';

const TabLayout = () => {
  return (
    <SafeAreaView style={tw.style('flex-1')} edges={['top']}>
      <Tabs
        // initialRouteName="home"
        tabBar={(props) => <HomeTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Vocabularies',
            headerShown: true,
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: 'Notification',
            headerShown: true,
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: 'Setting',
            headerShown: true,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: true,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;

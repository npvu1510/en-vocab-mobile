import { LayoutChangeEvent, View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import HomeTabBarButton from './HomeTabBarButton';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect, useState } from 'react';

import tw from '../../libs/tw';

function HomeTabBar({ state, navigation }: BottomTabBarProps) {
  const [tabBarDimensions, setTabBarDimensions] = useState({
    height: 1,
    width: 1,
  });

  const tabBarButtonWidth = tabBarDimensions.width / state.routes.length;

  // Animation
  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      translateX: tabPositionX.value,
    };
  });

  useEffect(() => {
    tabPositionX.value = withTiming(tabBarButtonWidth * state.index, {
      duration: 250,
    });
    console.log(state.index, tabBarButtonWidth * state.index);
  }, [state.index]);

  // Handler
  const tabBarLayoutHandler = (e: LayoutChangeEvent) => {
    setTabBarDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  return (
    <View
      onLayout={tabBarLayoutHandler}
      style={tw.style(
        'bg-primary-light flex-row pb-8 pt-4 tablet:pb-10 tablet:pt-6'
      )}
    >
      <Animated.View
        style={[
          animatedStyle,
          tw.style(
            `absolute top-0 left-${tabBarButtonWidth / 16} bg-white w-[${
              tabBarButtonWidth / 2
            }px] h-0.5 tablet:h-1 rounded-md`
          ),
        ]}
      />
      {state.routes.map((route, index) => {
        // const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <HomeTabBarButton
            key={route.key}
            label={route.name}
            routeName={route.name}
            isFocused={isFocused}
            focusedColor={'white'}
            unFocusedColor="white-transparent"
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

export default HomeTabBar;

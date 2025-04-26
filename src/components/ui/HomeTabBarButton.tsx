import { Pressable, StyleSheet, Text } from 'react-native';

import ICONS from '../../constants/icons';

import tw from '../../libs/tw';
import { moderateScale } from 'react-native-size-matters';

type TabBarButtonProps = {
  label: string;
  routeName: string;
  focusedColor: string;
  unFocusedColor: string;
  isFocused: Boolean;
  onPress: () => void;
  // onLongPress: () => void;
};

const HomeTabBarButton = (props: TabBarButtonProps) => {
  const {
    label,
    routeName,
    isFocused,
    focusedColor,
    unFocusedColor,
    onPress,
    // onLongPress,
  } = props;

  return (
    <Pressable
      onPress={onPress}
      // onLongPress={onLongPress}
      style={tw.style('flex-1 justify-center items-center')}
    >
      {ICONS[routeName]({
        color: isFocused ? focusedColor : unFocusedColor,
        size: moderateScale(24),
      })}
      <Text
        style={[
          tw.style('text-sm tablet:text-lg'),
          tw.style(
            isFocused ? `text-${focusedColor}` : `text-${unFocusedColor}`
          ),
        ]}
      >
        {`${label.at(0).toUpperCase()}${label.slice(1, label.length)}`}
      </Text>
    </Pressable>
  );
};

export default HomeTabBarButton;

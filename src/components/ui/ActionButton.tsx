import { Pressable, View } from 'react-native';

import ICONS from '../../constants/icons';

import tw from '../../libs/tw';
import { moderateScale } from 'react-native-size-matters';

type ActionButtonProps = {
  iconName: string;
  iconColor?: string;
  iconSize?: number;

  onPress?: () => void;

  buttonSize?: number;
  buttonStyle?: string;
  paddingX?: string;
  paddingY?: string;
  radius?: string;
};

const ActionButton = ({
  iconName = 'home',
  iconColor = 'black',
  iconSize = 24,

  buttonSize = 32,
  buttonStyle = 'bg-white',

  paddingX = 'px-1',
  paddingY = 'py-1',

  radius = 'rounded-md',
  onPress,
}: ActionButtonProps) => {
  const styles = tw.style(
    `w-[${Math.trunc(moderateScale(buttonSize))}px] h-[${Math.trunc(
      moderateScale(buttonSize)
    )}px]`,
    'justify-center items-center',
    buttonStyle,
    paddingX,
    paddingY,
    radius
  );

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View style={[styles, pressed && tw.style('opacity-75')]}>
          {ICONS[iconName]({ color: iconColor, size: iconSize })}
        </View>
      )}
    </Pressable>
  );
};

export default ActionButton;

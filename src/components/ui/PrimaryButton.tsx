import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { moderateScale } from 'react-native-size-matters';
import tw from '../../libs/tw';

const PrimaryButton = ({
  title,
  onPress,
  icon,
  iconSize,
  iconColor,
  buttonStyles,
  paddingStyles,
  titleStyles,
  rippleStyles,
}) => {
  const pressHandler = () => {
    onPress();
  };

  return (
    <View
      style={[
        styles.outerContainer,
        styles.iosShadow,
        tw.style(buttonStyles),
        // tw.style('p-0'),
      ]}
    >
      <Pressable
        style={tw.style(paddingStyles)}
        android_ripple={{ color: rippleStyles }}
        // onPress={() => {
        //   console.log('onPress');
        // }}
        onPress={pressHandler}
      >
        {({ pressed }) => (
          <View
            style={
              !pressed
                ? tw.style(styles.innerContainer)
                : tw.style(styles.innerContainer, styles.iosPressed)
            }
          >
            {icon && (
              <Ionicons
                name={icon}
                size={iconSize || moderateScale(18)}
                style={{ color: iconColor }}
              />
            )}
            <Text style={[styles.buttonTitle, tw.style(titleStyles)]}>
              {title}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = {
  outerContainer: tw`rounded-md tablet:rounded-lg overflow-hidden`,
  innerContainer: tw`flex-row justify-center items-center gap-2.5`,
  buttonTitle: tw`text-base tablet:text-2xl font-bold uppercase`,

  iosPressed: tw`opacity-75`,

  iosShadow: {
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
};

export default PrimaryButton;

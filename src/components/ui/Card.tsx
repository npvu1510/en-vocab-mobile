import { StyleSheet, Text, View } from 'react-native';

import tw from '../../libs/tw';

type CardProps = {
  children: any;
  backgroundColor?: string;
  roundedStyles?: string;
  paddingStyles?: string;
  othersStyles?: string;
};

const Card = ({
  children,
  backgroundColor = 'bg-surface-light',
  roundedStyles = 'rounded-2xl',
  paddingStyles = 'p-5',
  othersStyles = '',
}: CardProps) => {
  return (
    <View
      style={[
        tw.style('w-full'),
        tw.style(backgroundColor),
        tw.style(roundedStyles),
        tw.style(paddingStyles),
        tw.style(othersStyles),
      ]}
    >
      {children}
    </View>
  );
};

export default Card;

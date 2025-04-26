import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';

import tw from '../libs/tw';

type iconProps = {
  size: number;
  color: string;
};

const ICONS = {
  home: ({ color, size }: iconProps) => (
    <FontAwesome
      name="home"
      color={tw.color(color)}
      size={moderateScale(size)}
    />
  ),
  notification: ({ color, size }: iconProps) => (
    <FontAwesome
      name="bell"
      color={tw.color(color)}
      size={moderateScale(size)}
    />
  ),

  profile: ({ color, size }: iconProps) => (
    <FontAwesome
      name="user"
      color={tw.color(color)}
      size={moderateScale(size)}
    />
  ),

  filter: ({ color, size }: iconProps) => {
    return (
      <FontAwesome
        name="filter"
        color={tw.color(color)}
        size={moderateScale(size)}
      />
    );
  },

  speaker: ({ color, size }: iconProps) => (
    <FontAwesome
      name="volume-up"
      color={tw.color(color)}
      size={moderateScale(size)}
    />
  ),

  setting: ({ color, size }: iconProps) => (
    <FontAwesome
      name="cog"
      color={tw.color(color)}
      size={moderateScale(size)}
    />
  ),

  trash: ({ color, size }: iconProps) => (
    <FontAwesome
      name="trash"
      color={tw.color(color)}
      size={moderateScale(size)}
    />
  ),
};

export default ICONS;

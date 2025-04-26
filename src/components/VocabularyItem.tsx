import { Text, View } from 'react-native';
import Card from './ui/Card';

import ActionButton from './ui/ActionButton';
import { SvgUri } from 'react-native-svg';

import tw from '../libs/tw';
import { moderateScale } from 'react-native-size-matters';

type VocabularyItemProps = {
  vocab: {
    definition: string;
    image?: string;
    audioGb?: string;
    audioUs?: string;
  };
  definitionStyle?: string;
  audioButtonStyle?: {
    size?: number;
    style?: string;
    iconSize?: number;
    iconColor?: string;
  };
  imageStyle?: string;
  cardStyle?: string;
};

const VocabularyCard = ({
  vocab,
  definitionStyle = 'text-xl',
  audioButtonStyle = {
    size: 24,
    style: 'bg-primary',
    iconSize: 16,
    iconColor: 'white',
  },
  imageStyle = 'w-32 p-32 tablet:w-42 tablet:h-42',
  cardStyle = '',
}: VocabularyItemProps) => {
  return (
    <Card backgroundColor="bg-surface-light" othersStyles={cardStyle}>
      <View style={tw.style('flex-1 justify-center items-center gap-4')}>
        {vocab.image && (
          <SvgUri
            // style={tw.style('w-32 h-32 tablet:w-42 tablet:h-42')}
            style={tw.style(imageStyle)}
            uri={vocab.image}
          />
        )}

        <Text style={tw.style(definitionStyle)}>{vocab.definition}</Text>
        <View style={tw.style('flex-row gap-3')}>
          <ActionButton
            iconName="speaker"
            iconColor={audioButtonStyle.iconColor}
            iconSize={audioButtonStyle.iconSize}
            buttonSize={audioButtonStyle.size}
            buttonStyle={audioButtonStyle.style}
            onPress={() => console.log('GB:', vocab.audioUs)}
          />

          <ActionButton
            iconName="speaker"
            iconColor={audioButtonStyle.iconColor}
            iconSize={audioButtonStyle.iconSize}
            buttonSize={audioButtonStyle.size}
            buttonStyle={audioButtonStyle.style}
            onPress={() => console.log('US:', vocab.audioUs)}
          />
        </View>
      </View>
    </Card>
  );
};

export default VocabularyCard;

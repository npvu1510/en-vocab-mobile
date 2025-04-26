import { Text, TouchableOpacity, View } from 'react-native';

import tw from '../libs/tw';
import displayOptions from '../constants/displayOptions';

const VocabularyFilter = ({ currentDisplayMode, onDisplayMode }) => {
  const changeDisplayModeHandler = (displayOptionId) => {
    onDisplayMode(displayOptionId);
  };
  return (
    <View style={tw.style('flex-1 p-5 tablet:p-10')}>
      <View>
        <Text style={tw.style('text-xl tablet:text-4xl font-bold')}>
          Display mode
        </Text>

        <View style={tw.style('mt-2 tablet:mt-6')}>
          {displayOptions.map((option, index) => {
            const isSelected = currentDisplayMode === option.id;

            return (
              <TouchableOpacity
                key={option.id}
                onPress={() => {
                  changeDisplayModeHandler(option.id);
                }}
                style={tw`flex-row gap-2 tablet:gap-4 items-center mb-2 tablet:mb-4`}
              >
                <View
                  style={tw.style(
                    'w-5 h-5 tablet:w-10 tablet:h-10 rounded-full border-2 tablet:border-4 border-primary justify-center items-center',
                    isSelected && 'border-[3px]'
                  )}
                >
                  {isSelected && (
                    <View
                      style={tw`w-2.5 h-2.5 tablet:w-5 tablet:h-5 bg-primary rounded-full`}
                    />
                  )}
                </View>
                <Text style={tw`text-base tablet:text-3xl`}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default VocabularyFilter;

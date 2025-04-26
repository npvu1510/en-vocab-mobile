import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

import tw from '../../libs/tw';

const InputField = ({ paddingStyle, placeholder, placeholderTextColor }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={[tw.style('bg-white py-3 px-4 rounded-md', paddingStyle)]}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({});

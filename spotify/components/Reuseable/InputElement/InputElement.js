import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const InputElement = ({value, placeholder, onChange, keyboard}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      keyboardType={keyboard}
      placeholderTextColor="#000" 
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    // color: 'black',
  },
});

export default InputElement;

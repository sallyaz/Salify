import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ButtonElement = ({onPress, color, title, titleColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={[styles.buttonTitle, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 25,
    elevation: 2,
    marginVertical: 8,
    width: wp('90%'),
    alignSelf: 'center',
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
});

export default ButtonElement;

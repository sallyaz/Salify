import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.contanier}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#121212',
  },
});

export default HomeScreen;

import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Reusable
import InputElement from '../Reuseable/InputElement/InputElement';
import ButtonElement from '../Reuseable/ButtonElement/ButtonElement';

const ForgotPassword = ({navigation}) => {
  const [formState, setFormState] = useState({
    email: '',
  });

  const updateState = (type, value) => {
    setFormState(prevState => ({...prevState, [type]: value}));
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-around',
        // Vertical: 64,
      }}>
      <View
        style={{
          alignSelf: 'center',
          width: wp('85%'),
          height: wp('18%'),
        }}>
        <Image
          resizeMode={'contain'}
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/Black-Spotify-Logo.png')}
        />
      </View>
      <View style={{marginVertical: 32}}>
        <Text style={styles.text}>
          Enter your email address to reset your password{' '}
        </Text>
      </View>
      <View>
        <InputElement
          value={formState.email}
          placeholder={'Email address'}
          onChange={updateState.bind(this, 'email')}
        />

        <ButtonElement titleColor={'#fff'} title={'SEND'} color={'#1db954'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  text: {
    textAlign: 'center',
    fontSize: 34,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
});

export default ForgotPassword;

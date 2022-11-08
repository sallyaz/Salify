import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components - Reusable
import InputElement from '../Reuseable/InputElement/InputElement';
import ButtonElement from '../Reuseable/ButtonElement/ButtonElement';

const LoginPage = ({navigation}) => {
  const onRegister = screen => navigation.navigate(screen);
  const onForget = screen => navigation.navigate(screen);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const updateState = (type, value) => {
    setFormState(prevState => ({...prevState, [type]: value}));
  };

  const onLogin = () => {
    console.log(formState);
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode={'contain'}
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/Black-Spotify-Logo.png')}
        />
      </View>
      <View>
        <Text style={[styles.text, {fontSize: 28}]}>Log in to continue</Text>
        <InputElement
          value={formState.email}
          placeholder={'Email address Or username'}
          onChange={updateState.bind(this, 'email')}
        />
        <InputElement
          value={formState.password}
          placeholder={'Password'}
          onChange={updateState.bind(this, 'password')}
        />
        <ButtonElement
          title={'LOG IN'}
          titleColor={'#ffff'}
          color={'#1db954'}
          onPress={onLogin}
        />
      </View>
      <View style={styles.forgetContainer}>
        <View style={[styles.text, {flexDirection: 'row'}]}>
          <Text style={styles.footer}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={onRegister.bind(this, 'register')}>
            <Text style={styles.footer}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onForget.bind(this, 'forget')}>
            <Text style={styles.text}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  imgContainer: {
    alignSelf: 'center',
    width: wp('85%'),
    height: wp('18%'),
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    paddingVertical: 16,
  },
  forgetContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  footer: {
    ontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default LoginPage;

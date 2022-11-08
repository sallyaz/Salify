import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components - Reusable
import InputElement from '../Reuseable/InputElement/InputElement';
import ButtonElement from '../Reuseable/ButtonElement/ButtonElement';
import DatePickerElement from '../Reuseable/DatePickerElement/DatePickerElement';

const RegisterPage = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const onRegister = screen => navigation.navigate(screen);

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    date: '',
  });

  const updateState = (type, value) => {
    setFormState(prevState => ({...prevState, [type]: value}));
  };

  const onSignUp = () => {
    console.log(formState);
    setFormState({
      username: '',
      email: '',
      password: '',
      date: '',
    });
  };

  const onOpen = () => setOpen(prevState => !prevState);

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
        <Text style={[styles.text, {fontSize: 28}]}>Sign Up to continue</Text>

        <InputElement
          value={formState.username}
          placeholder={'username'}
          onChange={updateState.bind(this, 'username')}
        />
        <InputElement
          value={formState.email}
          placeholder={'Email address'}
          onChange={updateState.bind(this, 'email')}
        />
        <InputElement
          value={formState.password}
          placeholder={'Password'}
          onChange={updateState.bind(this, 'password')}
        />
        <DatePickerElement open={open} setOpen={setOpen} />
        <ButtonElement
          title={'Select Date'}
          titleColor={'#000'}
          onPress={onOpen}
          color={'#ffff'}
        />

        <ButtonElement
          title={'SIGN UP'}
          titleColor={'#ffff'}
          color={'#1db954'}
          onPress={onSignUp}
        />
      </View>
      <View style={styles.forgetContainer}>
        <View style={[styles.text, {flexDirection: 'row'}]}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={onRegister.bind(this, 'login')}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}> Login</Text>
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
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 16,
  },
  forgetContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterPage;

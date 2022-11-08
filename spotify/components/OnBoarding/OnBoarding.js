import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ButtonElement from '../Reuseable/ButtonElement/ButtonElement';

const OnBoarding = ({navigation}) => {
  const onNavigate = screen => navigation.navigate(screen);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
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
      <View style={{marginVertical: 64}}>
        <Text style={styles.text}>We play the music. You enjoy it. Deal?</Text>
      </View>
      <View>
        <ButtonElement
          titleColor={'#ffff'}
          title={'SIGN UP'}
          color={'#1db954'}
          onPress={onNavigate.bind(this, 'register')}
        />
        <ButtonElement
          titleColor={'#000'}
          title={'LOG IN'}
          color={'#ffff'}
          onPress={onNavigate.bind(this, 'login')}
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          height: hp('20%'),
        }}>
        <Text style={{textAlign: 'center', paddingHorizontal: 16}}>
          By clicking on sign up, you agree to
        </Text>
        <Text style={{textAlign: 'center', paddingHorizontal: 16}}>
          Spotify's terms and conditions of Use
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 34,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
});

export default OnBoarding;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { COLORS, peacockGradientColors } from './src/common/constants';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  

  return (
    <KeyboardAvoidingView style={[backgroundStyle, styles.mainWrapper]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.appColor1}
      />
      <LinearGradient colors={peacockGradientColors} style={styles.linearGradient}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./src/assets/images/FunJoyLogoCircle.png')} style={styles.logo}/>
          <Text style={styles.headingText}>Fun App</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            mode='flat'
            label="Email or Mobile Number"
            placeholder='Please enter the email or mobile number'
            value={userField}
            onChangeText={text => setUserField(text)}
            underlineColor={COLORS.appColor4}
            activeUnderlineColor={COLORS.appColor4}
            style={{width: '90%', alignSelf: 'center', backgroundColor: COLORS.appColor5}}
          />
           <TextInput
            mode='flat'
            label="Password"
            placeholder='Please enter the password'
            value={password}
            onChangeText={text => setPassword(text)}
            underlineColor={COLORS.appColor4}
            activeUnderlineColor={COLORS.appColor4}
            style={{width: '90%', alignSelf: 'center', backgroundColor: COLORS.appColor5, marginTop: 35}}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Button mode="contained" onPress={() => console.log('Pressed')} style={{width: '80%', alignSelf: 'center'}}>
            Login
          </Button>
          <Text style={{fontSize: 20, fontFamily: 'ComicNeue-Bold', color: COLORS.white, marginVertical: 10}}>Or</Text>
          <Button mode="contained" onPress={() => console.log('Pressed')} style={{width: '80%', alignSelf: 'center'}}>
            SignUp
          </Button>
        </View>
        <View style={{flex: 2}}>

        </View> 
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

export default App;

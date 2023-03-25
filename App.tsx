/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
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
import { TextInput } from 'react-native-paper';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [userField, setUserField] = useState('');
  const [password, setPassword] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.mainWrapper]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.appColor1}
      />
      <LinearGradient colors={peacockGradientColors} style={styles.linearGradient}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./src/assets/images/FunJoyLogoCircle.png')} style={styles.logo}/>
          <Text style={styles.headingText}>Fun App</Text>
        </View>
        <View style={{flex: 4}}>
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
            style={{width: '90%', alignSelf: 'center', backgroundColor: COLORS.appColor5, marginTop: 20}}
          />
        </View>
        <View style={{flex: 2}}>

        </View>
        <View style={{flex: 2}}>

        </View> 
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 mainWrapper: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 logo: {
  width: undefined,
  height: '50%',
  aspectRatio: 1
 },
 linearGradient: {
  width: '100%',
  height: '100%'
 },
 headingText: {
  fontSize: 22,
  fontFamily: 'ComicNeue-Bold',
  marginVertical: 10,
  color: COLORS.white,
  textShadowColor: COLORS.yellow,
  textShadowOffset: {width: 1, height: 1},
   textShadowRadius: 1
 }
});

export default App;

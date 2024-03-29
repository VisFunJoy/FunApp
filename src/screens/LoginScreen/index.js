import React from "react";


export const LoginScreen = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const [userField, setUserField] = useState('');
    const [password, setPassword] = useState('');

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

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

const styles = StyleSheet.create({
    mainWrapper: {
     flex: 1
    },
    logo: {
     width: undefined,
     height: '40%',
     aspectRatio: 1
    },
    linearGradient: {
     flex: 1,
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
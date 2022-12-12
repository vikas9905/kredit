import React, {useState} from 'react';
import {View, Text, Pressable,StatusBar} from 'react-native';
import {scale} from 'react-native-size-matters';
// import Container from '../../components/Container';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import Label from '../../components/Label';
// import {appColors, shadow} from '../../utils/appColors';
// import Feather from 'react-native-vector-icons/Feather';
//  import {AlertHelper} from '../../utils/AlertHelper'
import Container from '../../container/container';
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Login({navigation}) {
    // const[email,setEmail] = useState('');
    // const[password,setPassword] = useState('');
    const email ='';
    const pass='';
    const STYLES = ['default', 'dark-content', 'light-content'];
    const TRANSITIONS = ['fade', 'slide', 'none'];
    const statusBarStyle = STYLES[2];
    const statusBarTransition = TRANSITIONS[2];
    const hidden = false;
  return (
    
    // <Container isScrollable>
    
         <LoginScreen
            logoImageSource={require("../../../assets/adaptive-icon.png")}
            onLoginPress={() => {navigation.navigate('Home')}}
            onSignupPress={() => {}}
            onEmailChange={(email) => {email = email}}
            onPasswordChange={(password) => {password = password}}
            >
                <SocialButton text="Continue with Google" onPress={() => {}} />
                
        </LoginScreen>
     
    // </Container>
  );
}

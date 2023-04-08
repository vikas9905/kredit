import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet} from 'react-native';
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
import { SocialIcon, SocialIconProps } from '@rneui/themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSelector, useDispatch , useStore} from "react-redux";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,Text
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Dimensions} from 'react-native';
import {CustomSocialButton} from '../../components/socialButtons';
import {googleSignIn} from '../../actions/actions';
import {signInWithGoogl,signWithEmailPass,signInWithNum} from '../../firebase/firebase';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,useTheme
} from "@react-navigation/native";
import {theme} from '../../theme';
export default function Login({navigation}) {
    // const[email,setEmail] = useState('');
    // const[password,setPassword] = useState('');
    // const theme = useTheme();
    const email ='';
    const pass='';
    const STYLES = ['default', 'dark-content', 'light-content'];
    const TRANSITIONS = ['fade', 'slide', 'none'];
    const statusBarStyle = STYLES[2];
    const statusBarTransition = TRANSITIONS[2];
    const hidden = false;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const dispatch = useDispatch();
    const {} = useSelector(state=> state.questionReducer)
    
  return (
    
    // <Container isScrollable>
    
        //  <LoginScreen
        //     logoImageSource={require("../../../assets/adaptive-icon.png")}
        //     onLoginPress={() => {navigation.navigate('Home')}}
        //     onSignupPress={() => {}}
        //     onEmailChange={(email) => {email = email}}
        //     onPasswordChange={(password) => {password = password}}
        //     >
        //     <SocialButton text="Continue with Google" onPress={() => {}} />
                
        // </LoginScreen>
     
    // </Container>
    <>
    <Backdrop
      revealed={true}
      backLayer={<View style={{ height: windowHeight/3 }} >
        <View style={{alignItems:'center',justifyContent:'center',flex:1}} >
          <Text variant="h5" color='#fff' >LOGIN</Text>
        </View>
      </View>}
    >
    </Backdrop>
    <View style={styles.container}>
      <CustomSocialButton name='phone'   title='Login with Phone' onPress = {()=>{signInWithNum()}} />
      <CustomSocialButton name='envelope-o'   title='Login with Google' onPress = {()=>{dispatch(googleSignIn())}} />
      <CustomSocialButton name='facebook'   title='Login with Facebook' onPress = {()=>{signWithEmailPass()}} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:30,
  },
})

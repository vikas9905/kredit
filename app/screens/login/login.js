/*eslint-disable*/
import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet} from 'react-native';
// import {scale} from 'react-native-size-matters';
// import Container from '../../components/Container';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import Label from '../../components/Label';
// import {appColors, shadow} from '../../utils/appColors';
// import Feather from 'react-native-vector-icons/Feather';
//  import {AlertHelper} from '../../utils/AlertHelper'
import Container from '../../container/container';
// import LoginScreen, { SocialButton } from "react-native-login-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SocialIcon, SocialIconProps } from '@rneui/themed';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSelector, useDispatch , useStore} from "react-redux";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { GoogleSignin,statusCode } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,Text,Button
} from "@react-native-material/core";
// import Constants from 'expo-constants';
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Dimensions} from 'react-native';
import {CustomSocialButton} from '../../components/socialButtons';
import {googleSignIn} from '../../actions/actions';
// import {signInWithGoogl,signWithEmailPass,signInWithNum,firebaseConfig,signInwithPhone} from '../../firebase/firebase';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,useTheme
} from "@react-navigation/native";
import {theme} from '../../theme';
import { TextInput } from 'react-native-paper';
import {AsyncStorage} from 'react-native';

// WebBrowser.maybeCompleteAuthSession();

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
    const[accessToken,setAccessToken] = useState(null)
    const[user,setUser] = useState(null);
    const[sendOtp,setOtp] = useState(false);
    const recaptchaVerifier = React.useRef(null);
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [verificationId, setVerificationId] = React.useState();
    const [verificationCode, setVerificationCode] = React.useState()
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //   clientId: Constants.manifest?.extra?.webClientId,
    //   androidClientId: Constants.manifest?.extra?.androidClientId
    // });
    // useEffect(() => {
    //   if (response?.type === "success") {
    //     setAccessToken(response.authentication.accessToken);
    //     accessToken && getUserInfo();
    //   }
    // }, [response, accessToken]);
    const getUserInfo = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
  
        const user = await response.json();
        setUser(user);
      } catch (error) {
        // Add your own error handler here
      }
    };
    const {} = useSelector(state=> state.questionReducer)
    const loginUser = async () =>{
      setOtp(true);
      let user_details = JSON.stringify({'user_id':'1234'})
      await AsyncStorage.setItem('user_details',user_details)
    }
    signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo)
        this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log("Error>>",error.code)
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log("In progress")
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };
    
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
          <Text  color='#fff' >LOGIN</Text>
        </View>
      </View>}
    >
    </Backdrop>
    <View style={styles.container}>
    <View style={{ marginTop: 10 }}>
                {!sendOtp && <>
                  <TextInput
                    mode="outlined"
                    label="NUMBER"
                    style={{ marginTop: 10 }}/>
                   {/* <FirebaseRecaptchaVerifierModal
                      ref={recaptchaVerifier}
                      firebaseConfig={firebaseConfig}
                      // attemptInvisibleVerification
                    /> */}
                    </>
                }
                {sendOtp && 
                <TextInput
                  mode="outlined"
                  label="OTP"
                  style={{ marginTop: 10 }}
                />
                }

                
                
    </View>
      {sendOtp && <Button variant="text" title="resend" style={{padding:0,justifyContent:'flex-start',width:100,marginLeft:-20}} />}
      {/* {!sendOtp && <CustomSocialButton name='phone'   title='Login with Phone' onPress = {()=>{setOtp(true);signInWithNum('+917992367559',recaptchaVerifier.current)}} />} */}
      {!sendOtp && <CustomSocialButton name='phone'   title='Login with Phone' onPress = {()=>{setOtp(true);signIn()}} />}
      {sendOtp && <CustomSocialButton   title='Verify' onPress = {()=>{loginUser()}} />}
      {sendOtp && <CustomSocialButton name='phone'   title='change number' onPress = {()=>{setOtp(false)}} />}
      {/* <CustomSocialButton name='envelope-o'   title='Login with Google' onPress = {()=>{}} />
      <CustomSocialButton name='facebook'   title='Login with Facebook' onPress = {()=>{signWithEmailPass()}} /> */}
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

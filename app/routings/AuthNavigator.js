/*eslint-disable*/
import React,{useEffect,useCallback,useState} from "react";
import { View } from "react-native";
import MainStack from "./mainStack";
import OnboardingNavigation from "./OnBoardingRoute";
// import * as SplashScreen from 'expo-splash-screen';
import { useSelector, useDispatch , useStore} from "react-redux";
import {getUserDetails,getDataFromLocalStorage} from '../actions/actions';
import {USER_DETAILS_SUCCESS,USER_DETAILS_FAILED} from '../actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
import {webCliendId,androidClientId} from '@env';
import SplashScreen from 'react-native-splash-screen'
import {BusyIndicator} from '../components/busyIndicator';
import {
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
import Container from '../container/container';
// SplashScreen.preventAutoHideAsync()
GoogleSignin.configure({
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: webCliendId, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  androidClientId: androidClientId,
  // hostedDomain: '', // specifies a hosted domain restriction
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});
const AuthNavigator = ({login}) => {
  const {isLoggedIn,userDetails} = useSelector(state=>state.userReducer)
  console.log("in auth navigator",userDetails)
  dispatch = useDispatch();
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      const user_details = {
        user_name: userInfo.user.name,
        user_id: userInfo.user.id,
        email: userInfo.user.email,
        profile_pic: userInfo.user.photo,
      }
      dispatch({type:USER_DETAILS_SUCCESS,payload:user_details})
      await AsyncStorage.setItem('isLoggedIn','true');
      await AsyncStorage.setItem('user_details',JSON.stringify(user_details));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };
  useEffect( ()=>{
    if(!isLoggedIn) {
      let res = false;
      const resp = async () =>  { let res = await AsyncStorage.getItem('isLoggedIn')};
      console.log(res)
      if(res == 'true'){
        dispatch({type:USER_DETAILS_SUCCESS})
      }
    }
    // getCurrentUserInfo()
    
  },[isLoggedIn])
  // if(isLoggedIn == undefined) {
  //   return (
  //     // <Container>
  //     //     <View
  //     //       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  //     //     >
  //     //       <ActivityIndicator size="large" />
  //     //     </View>
  //     // </Container>
  //     null
  //   )
  // }
  return (
    <View style={{ flex: 1 }} >
      {isLoggedIn ? <MainStack /> : <OnboardingNavigation />}
    </View>
  );
};

export default AuthNavigator;

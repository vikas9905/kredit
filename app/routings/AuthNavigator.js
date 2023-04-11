import React,{useEffect,useCallback,useState} from "react";
import { View } from "react-native";
import MainStack from "./mainStack";
import OnboardingNavigation from "./OnBoardingRoute";
import * as SplashScreen from 'expo-splash-screen';
import { useSelector, useDispatch , useStore} from "react-redux";
import {getUserDetails,getDataFromLocalStorage} from '../actions/actions';
import {AsyncStorage} from 'react-native';
import {USER_DETAILS_SUCCESS,USER_DETAILS_FAILED} from '../actions/actionTypes';
SplashScreen.preventAutoHideAsync()
const AuthNavigator = () => {
    const [isLoggedIn,setLogin] = useState(false);
    const dispatch = useDispatch();
    const {userDetails} = useSelector(state=>state.userReducer)
    useEffect(() => {
      dispatch(getDataFromLocalStorage('user_details',USER_DETAILS_SUCCESS,USER_DETAILS_FAILED))
      setLogin(true);
    },[]);
    const onLayoutRootView = useCallback(async () => {
      console.log("in auth",userDetails)
      if(userDetails.user_id != undefined){
        await SplashScreen.hideAsync();
      }
    }, [userDetails]);

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {isLoggedIn ? <MainStack /> : <OnboardingNavigation />}
    </View>
  );
};

export default AuthNavigator;

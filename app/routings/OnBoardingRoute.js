/*eslint-disable*/
import { useTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  HeaderStyleInterpolators
} from "@react-navigation/stack";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import  publicRoutes  from "./publicRoute";
import Login from '../screens/login/login'
import config from '../config'
import Home from '../screens/home/Home';
const Stack = createStackNavigator();
const OnboardingNavigation = () => {
//   const { primary } = useTheme().colors;
  return (

      
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen  name="Login" component={Login} options={{headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,}}/>
        </Stack.Navigator>
      
    
  );
};

export default OnboardingNavigation;

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
const Stack = createStackNavigator();
const OnboardingNavigation = () => {
//   const { primary } = useTheme().colors;
  return (

      
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* {publicRoutes?.map((route, key) => {
            const {name, component} = route;
            return <Stack.Screen key={key} name={name} component={component} />;
            })} */}
            <Stack.Screen  name="Login" component={Login} options={{headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,}}/>
        </Stack.Navigator>
      
    
  );
};

export default OnboardingNavigation;

import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native';
import React, {useState,useEffect,useCallback} from "react";
import 'react-native-gesture-handler';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { Provider } from "react-redux";
import AuthNavigator from './app/routings/AuthNavigator';
import Welcome from './app/screens/welcome/welcome';
import Header from './app/components/homeComponent';
import Feather from 'react-native-vector-icons/Feather'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
// MaterialIcons.loadFont()
// Ionicons.loadFont()
// FontAwesome.loadFont()
// Feather.loadFont()
// MaterialCommunityIcons.loadFont()
const LoadFont = async () =>{
     Font.loadAsync({'MaterialIcons': require('./assets/fonts/MaterialIcons.ttf')})
}
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgba(89, 86, 233, 1)",
    text: "#868686",
    background: "#F2F2F2",
  },
};

export default function App() {
  // const fetchFonts = Font.loadAsync({
  //   'Ant-design': require('./assets/fonts/AntDesign.ttf'),
  //   'font-awesome': require('./assets/fonts/FontAwesome.ttf'),
  //   'fontawsome-brands': require('./assets/fonts/FontAwesome5_Brands.ttf'),
  //   'materialicon': require('./assets/fonts/MaterialIcons.ttf'),
  //   'material-icons': require('./assets/fonts/MaterialIcons.ttf'),
  //   'material-community': require('./assets/fonts/MaterialCommunityIcons.ttf'),
  //   'Ionicons': require('./assets/fonts/Ionicons.ttf'),
  // });
  const STYLES = ['default', 'dark-content', 'light-content'];
    const TRANSITIONS = ['fade', 'slide', 'none'];
    const statusBarStyle = STYLES[2];
    const statusBarTransition = TRANSITIONS[2];
    const hidden = false;
    const [appIsReady, setAppIsReady] = useState(false);
    const [loaded] = useFonts({
      MaterialIcons: require('./assets/fonts/MaterialIcons.ttf'),
      MaterialCommunityIcons: require('./assets/fonts/MaterialCommunityIcons.ttf'),
    });
  
    if (!loaded) {
      return null;
    }
    
    
  return (
    < >
        {/* <SafeAreaView> */}
    <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
        
        <NavigationContainer theme={AppTheme}>
         {<AuthNavigator/>}
        </NavigationContainer>
        
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

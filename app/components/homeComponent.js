import React, {useEffect} from 'react';
import {
StyleSheet,
View,
Text,
Linking,
StyleProp,
TextStyle,
ViewStyle,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps,Badge,Avatar } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import * as Font from 'expo-font';
import { useSelector, useDispatch , useStore} from "react-redux";
import { DrawerActions } from '@react-navigation/native';
import {theme} from '../theme';
import { useTheme } from "@react-native-material/core";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import {theme as defaultTheme} from '../theme';
const Header = (props) =>  {
const { theme } = useSelector((state) => state.themeReducers);
 const name = props.name
 const icon =props.icon
 if(props.name == 'Home') {
  return (
    <HeaderRNE
      containerStyle={[styles.headerContainer]}
      statusBarProps={{color: theme.statusBarColor,backgroundColor:theme.statusBarColor}}
      leftComponent={{
        icon: icon,
        color: "#fff",
        onPress: () => {
          if (icon == "menu") {
            props.navigation.openDrawer();
          } else {
            props.navigation.goBack();
          }
        },
      }}
      centerComponent={{ text: name, style: styles.heading }}
      rightComponent={
        // <View style={{ width: "50%" }}>
          <TouchableOpacity onPress={() => console.log("click")}>
            <View>
              <MaterialIcons
                name="notifications-none"
                color="white"
                size={25}
                style={{marginTop:0,marginRight:5}}
              />
              <Badge
                status="error"
                value='0'
                containerStyle={{ position: "absolute", top: -3, right: 0 }}
              />
            </View>
          </TouchableOpacity>
        // </View>
      }
    />
  );
 }
 return (

  <HeaderRNE
    containerStyle={styles.headerContainer}
    statusBarProps={{color: theme.statusBarColor,backgroundColor:theme.statusBarColor}}
    leftComponent={
      {
          icon: icon,
          color: '#fff',
          onPress: ()=>{
            if(icon == 'menu'){
              props.navigation.openDrawer();
            }else{
              props.navigation.goBack();
            }
          }
      }
    }
    centerComponent={{ text: name, style: styles.heading }}
  />
);

};

const styles = StyleSheet.create({
headerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: defaultTheme.lightTheme.headerColor,
  marginBottom: 20,
  width: '100%',
  paddingVertical: 15,
},
heading: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
barStyle: {
  backgroundColor: theme.statusBarColor
}
});

export default Header;
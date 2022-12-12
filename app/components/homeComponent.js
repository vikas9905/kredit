import React from 'react';
import {
StyleSheet,
View,
Text,
Linking,
StyleProp,
TextStyle,
ViewStyle,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import * as Font from 'expo-font';
import { DrawerActions } from '@react-navigation/native';
const Header = (props) =>  {

 const name = props.name
 const icon =props.icon
return (

    <HeaderRNE
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
  backgroundColor: '#397af8',
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
});

export default Header;
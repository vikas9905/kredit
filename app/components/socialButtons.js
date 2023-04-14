/*eslint-disable*/
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet,TouchableOpacity,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export const CustomSocialButton = ({name,title,color,backgroundColor,onPress}) =>{
    const {theme} = useSelector((state)=> state.themeReducers);
    return (
        <TouchableOpacity style={styles.container} >
            <FontAwesome.Button onPress={onPress} color={color? color: theme.text} name={name} backgroundColor={backgroundColor? backgroundColor: theme.colors.primaryDark} style={{fontFamily: "Roboto",height:50,justifyContent:'center'}} > 
                {title}
            </FontAwesome.Button>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      marginTop:15
    //   padding:30,
    },
  })
  
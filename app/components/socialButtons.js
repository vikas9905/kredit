import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet,TouchableOpacity,Text,Button} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const CustomSocialButton = ({name,title,color,backgroundColor,onPress}) =>{
    return (
        <TouchableOpacity style={styles.container} >
            <FontAwesome.Button onPress={onPress} color={color? color: '#fff'} name={name} backgroundColor={backgroundColor? backgroundColor: '#4285F4'} style={{fontFamily: "Roboto",height:50,justifyContent:'center',color:'red'}} > 
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
  
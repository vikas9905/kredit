import React,{useState,useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
// import auth from '@react-native-firebase/auth';
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
export default Profile = ({navigation})=>{
    return (
        <>
            <Header name="Profile" icon="arrow-back" navigation={navigation}/>
        </>
       
    )
}
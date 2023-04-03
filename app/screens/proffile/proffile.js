import React,{useState,useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
import Container from '../../container/container';
export default Profile = ({navigation})=>{
    return (
        <>
            <Header name="Profile" icon="arrow-back" navigation={navigation}/>
            <Container>
                <View style={{fl}}>

                </View>
            </Container>
        </>
       
    )
}
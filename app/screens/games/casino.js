import React,{useState,useEffect} from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
import Container from '../../container/container';
import { Text, Stack, Button } from "@react-native-material/core";
import Roulette from 'react-native-casino-roulette';
import wheel from '../../../assets/wheel.png';
import marker from '../../../assets/wheel.png';
export const CasinoScreen = ({navigation}) =>{
    
    const numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
    const options  = numbers.map((o)=>({index:o}))  
    
    return (
        <>
            <Header name="Casino" icon="arrow-back" navigation={navigation} />
            <Container>
                <Roulette 
                    enableUserRotate 
                    background={wheel}
                    marker={marker}
                    options={options}
                    markerWidth={20} >          
                </Roulette>
            </Container>
        </>
    )

}

import React,{useState,useEffect} from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
import Container from '../../container/container';
import { Text, Stack, Button } from "@react-native-material/core";
import Roulette from 'react-native-casino-roulette';
import wheel from '../../../assets/wheel.png';
import marker from '../../../assets/wheel.png';
import { ScratchCard } from 'rn-scratch-card'

export default ScratchCardGame = ({navigation}) =>{
    

    return (
        <>
            <Header name="Scratch" icon="arrow-back" navigation={navigation} />
            <Container>
                        <ScratchCard
            source={require('../../../assets/knob.png')}
            brushWidth={50}
            onScratch={()=>console.log("Scratched")}
            
            />
            </Container>
        </>
    )

}

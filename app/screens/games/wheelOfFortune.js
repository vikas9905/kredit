import { Button } from '@rneui/base'
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../../components/homeComponent'
import { Card } from '@rneui/base'
import {TabBar} from '../../components/bottomComponent'
import { Icon } from '@rneui/base'
import WheelOfFortune from 'react-native-wheel-of-fortune'

export default WheelOfFortune = ({ navigation }) => {
    const participants = [
        '%10',
        '%20',
        '%30',
        '%40',
        '%50',
        '%60',
        '%70',
        '%90',
        'FREE',
];
const wheelOptions = {
rewards: participants,
knobSize: 50,
borderWidth: 5,
borderColor: '#000',
innerRadius: 50,
duration: 4000,
backgroundColor: 'transparent',
textAngle: 'horizontal',
getWinner: (value, index) => {
this.setState({winnerValue: value, winnerIndex: index});
},
onRef: ref => (this.child = ref),
};
    return (
        <SafeAreaView>
            <Header name="Home" icon="menu" navigation={navigation} />
            <View>
                <Text>Hello</Text>
                {/* <WheelOfFortune
                    wheelOptions={wheelOptions}
                />
                <Button title="Press me" onPress={ () => { this.child._onPress() } } /> */}
            </View>
          
        </SafeAreaView>
        
        

    )

}


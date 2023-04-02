import { Button } from '@rneui/base'
import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
// import auth from '@react-native-firebase/auth';
import Header from '../../components/homeComponent'
import { Card } from '@rneui/base'
import {TabBar} from '../../components/bottomComponent'
import { Icon } from '@rneui/base'
// import WheelOfFortune from 'react-native-wheel-of-fortune'

export default Home = ({ navigation }) => {
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
knobSource: require('../../../assets/onBoarding.png'),
getWinner: (value, index) => {
this.setState({winnerValue: value, winnerIndex: index});
},
onRef: ref => (this.child = ref),
};
    return (
        <SafeAreaView>
            <Header name="Home" icon="menu" navigation={navigation} />
            <View>
            <Card containerStyle={{ marginTop: 15 ,elevation:10, borderColor:'#fff'}}>
                
                <Card.Divider />
                <Icon >menu</Icon>
            </Card>
            <Card containerStyle={{ marginTop: 15 ,elevation:10, borderColor:'#fff'}}>
               <View >
                    
               </View>
            </Card>
            </View>
            <View>
            {/* <WheelOfFortune
                    wheelOptions={wheelOptions}
                /> */}
               
                {/* <TabBar/> */}
            </View>
          
        </SafeAreaView>
        
        

    )

}


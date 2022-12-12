import { Button } from '@rneui/base'
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
// import auth from '@react-native-firebase/auth';
import Header from '../../components/homeComponent'
import { Card } from '@rneui/base'
import {TabBar} from '../../components/bottomComponent'
import { Icon } from '@rneui/base'
export default Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header name="Home" icon="menu" navigation={navigation} />
            <View>
            <Card containerStyle={{ marginTop: 15 ,elevation:10, borderColor:'#fff'}}>
                
                <Card.Divider />
                <Icon >menu</Icon>
            </Card>
            <Card containerStyle={{ marginTop: 15 ,elevation:10, borderColor:'#fff'}}>
                <Card.Title>FONTS</Card.Title>
                <Card.Divider />
                <Text h1>
                    h1 Heading
                </Text>
                <Text h2>
                    h2 Heading
                </Text>
                <Text h3>
                    h3 Heading
                </Text>
                <Text h4>
                    h4 Heading
                </Text>
                <Text >Normal Text</Text>
            </Card>
            </View>
            <View>
               
                {/* <TabBar/> */}
            </View>
          
        </SafeAreaView>
        
        

    )

}


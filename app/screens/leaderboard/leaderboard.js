import React,{useState,useEffect,useRef} from 'react'
import { View, SafeAreaView } from 'react-native'
// import auth from '@react-native-firebase/auth';
import Header from '../../components/homeComponent';
import { Icon , Input,Tab,TabView} from '@rneui/themed';
import Container from '../../container/container';
import { Card } from "@rneui/base";
import {
    Text,
    Stack,
    Button,
    ActivityIndicator,
    TextInput,Box,Flex,Divider,ListItem,Avatar
  } from "@react-native-material/core";
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';


export default LeaderBoard = ({navigation}) =>{


    return (
        <>
        <Header name="Leaderboard" icon="arrow-back" navigation={navigation} />
        <Container style={{backgroundColor:'#fff'}}>
        <Flex fill >
         
          <Flex
            fill
            style={{ flex: 4, marginTop: 15 }}
          >
            <Text variant="h6">Top Earning Users</Text>
            <Divider style={{ marginTop: 10, backgroundColor: "#000000" }} />
            {/* <ListItem
                leadingMode="avatar"
                leading={
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                }
                trailingMode=""
                trailing={
                    // <Text variant="body1" color="green" >₹10000</Text>
                    <View style={{flexDirection:'row',alignItems:'center',color:'green'}} size={100}>
                    <FontAwesome name="rupee" font={30} color="green"/>
                    <Text>10000</Text>
                    </View>
                }
                color='green'
                title="₹ 100"
                secondaryText="Vikas"
            /> */}
            <View style={{height:100,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5}}>
                <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                <Text variant="body1">Vikash Kumar</Text>
                <Text variant="h6" color="green">₹1000</Text>
            </View>
          </Flex>
        </Flex>

        </Container>
        </>
    )
}
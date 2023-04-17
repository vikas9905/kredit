/*eslint-disable*/
import React,{useState,useEffect,useRef} from 'react'
import { View, SafeAreaView,FlatList } from 'react-native'
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
// import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch , useStore} from "react-redux";
import {getLeaderboard} from '../../actions/actions';
import {BusyIndicator} from '../../components/busyIndicator';


export default LeaderBoard = ({navigation}) =>{

    const {leaderboard} = useSelector(state=>state.userReducer)

    const Item = ({user}) =>{
      return (
        <>
          <View style={{height:100,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:5,marginTop:5}}>
            <Avatar image={{ uri:  user?.item?.profile_pic || 'https://mui.com/static/images/avatar/1.jpg' }} />
              <Text >{user?.item?.user_name || 'Guest'}</Text>
              <Text color="green">₹{user?.item?.credit || 0}</Text>
          </View>
        {/* <Divider style={{ marginTop: 10, backgroundColor: "#000000" }} /> */}
        </>
      )
    }

    useEffect(()=>{
      dispatch(getLeaderboard());
    },[])

    if(leaderboard.isLoading) {
      return (
        <BusyIndicator navigation={navigation} name="Leaderboard" icon="arrow-back" />
      )
    }

    return (
        <>
        <Header name="Leaderboard" icon="arrow-back" navigation={navigation} />
        <Container style={{backgroundColor:'#fff'}}>
        <Flex fill >
         
          <Flex
            fill
            style={{ flex: 4, marginTop: 15 }}
          >
            <Text>Top Earning Users</Text>
            <Divider style={{ marginTop: 10, backgroundColor: "#000000" }} />
            
            <FlatList
              data={leaderboard.data}
              renderItem={(item) => <Item user={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              refreshing={leaderboard.loading}
              onRefresh={() => dispatch(getLeaderboard())}
            />
          </Flex>
        </Flex>

        </Container>
        </>
    )
}
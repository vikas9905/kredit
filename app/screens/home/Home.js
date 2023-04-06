import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
// import auth from '@react-native-firebase/auth';
import Header from "../../components/homeComponent";
import { Card } from "@rneui/base";
import { TabBar } from "../../components/bottomComponent";
import { Icon } from "@rneui/base";
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  Button,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
// import WheelOfFortune from 'react-native-wheel-of-fortune'
import Emoji from "react-native-emoji";
import Container from '../../container/container';
import {getQuizs} from '../../actions/actions';
export default Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quizReducer);

  useEffect(() => {
    dispatch(getQuizs(1234));
  }, []);
  const participants = [
    "%10",
    "%20",
    "%30",
    "%40",
    "%50",
    "%60",
    "%70",
    "%90",
    "FREE",
  ];
  const getLevel = (level) => {
    switch (level) {
      case 0:
        return "Easy";
        break;
      case 1:
        return "Easy";
        break;
      case 2:
        return "Medium";
        break;
      case 3:
        return "Medium";
        break;
      case 4:
        return "Hard";
        break;
      case 4:
        return "Hard";
        break;
      default:
        return "Easy";
    }
  };
  const CardStyle = ({ quiz }) => {
    return (
      <Card
        containerStyle={{
          marginTop: 15,
          elevation: 10,
          borderColor: "#fff",
          backgroundColor: "red",
        }}
        onPress={ () => console.log("pressed")}
      >
        <Card.Title>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            {/* <View style={{flexDirection:'row'}}>
                <Text variant="h6" color="white">
                 Quiz
                </Text>
                <Emoji name="money_mouth_face" style={{ fontSize: 25 }} />
            </View> */}
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text color="white">Level: {getLevel(quiz.item.level)}</Text>
                <Emoji name="money_mouth_face" style={{ fontSize: 25 }} />
            </View>
          </View>
          
        </Card.Title>
        <Card.Divider />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            textColor: "#fff",
          }}
        >
          <Text variant="h4" color="white">
            ₹ {quiz.item.total_coins}
          </Text>
          <Text color="white">{quiz.item.users_won} User Won</Text>
          <Button variant="text" title="Start" onPress={()=> navigation.navigate('quiz',{ques_id:quiz.item.id})} />
        </View>
      </Card>
    );
  };
  if (quiz.isLoading) {
    return (
      <>
        <Header name="Home" icon="menu" navigation={navigation} />
      <Container>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      </Container>
      </>
    );
  }
 
  return (
    <>
      <Header name="Home" icon="menu" navigation={navigation} />
      <Container>
        <View  style={{flexDirection:'row',flex:1,marginTop:20}}>
          <Box h={150} m={4} style={{ backgroundColor: "tomato",flex:1 }} onPress={()=>console.log("cli")} />
          <Box h={150} m={4} style={{ backgroundColor: "tomato",flex:1 }} />
        </View>
      </Container>
    </>
  );
};

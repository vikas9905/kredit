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
  ActivityIndicator,
} from "@react-native-material/core";
// import WheelOfFortune from 'react-native-wheel-of-fortune'
import Emoji from "react-native-emoji";
import Container from '../../container/container';
import {getQuizs} from '../../actions/actions';
export default Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quizReducer);
//   console.log("data>>",quiz.data)
//   console.log("load",quiz.isLoading)
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
  //   const wheelOptions = {
  //     rewards: participants,
  //     knobSize: 50,
  //     borderWidth: 5,
  //     borderColor: "#000",
  //     innerRadius: 50,
  //     duration: 4000,
  //     backgroundColor: "transparent",
  //     textAngle: "horizontal",
  //     knobSource: require("../../../assets/onBoarding.png"),
  //     getWinner: (value, index) => {
  //       this.setState({ winnerValue: value, winnerIndex: index });
  //     },
  //     onRef: (ref) => (this.child = ref),
  //   };
  return (
    <>
      <Header name="Home" icon="menu" navigation={navigation} />
      {/* <Container style={{padding:0,paddingHorizontal:0}}> */}
        <FlatList
          data={quiz.data}
          renderItem={(item) => <CardStyle quiz={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          refreshing={quiz.isLoading}
          onRefresh={() => dispatch(getQuizs(1234))}
        />
      {/* </Container> */}
    </>
  );
};

import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity,StyleSheet,Image } from "react-native";
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
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
export default Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quizReducer);
  const { theme,colors } = useSelector((state) => state.themeReducers);

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
        <View  style={{marginTop:20}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity underlayColor={colors.primaryDark} style={[styles.box,{backgroundColor:colors.primary}]}>
              <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <MaterialCommunityIcons color='#fff' name="infinity" size={50} />
                <Text variant="body1" color="#fff">Play More Win 2X</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <TouchableOpacity underlayColor={colors.primaryDark} style={[styles.box,{backgroundColor:colors.primary}]} onPress={()=>navigation.navigate('listQuiz')}>
              <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Image source={require("../../../assets/Quiz_white.png")}   style={{width: 50, height: 50}} />
                <Text variant="body1" color="#fff">Quiz</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <TouchableOpacity underlayColor={colors.primaryDark} style={[styles.box,{backgroundColor:colors.primary}]} onPress={()=>console.log("Hello")}>
              <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Image source={require("../../../assets/globe_white.png")}   style={{width: 50, height: 50}} />
                <Text variant="body1" color="#fff">Predict & Win</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  box:{
    width:150,
    height: 150,
    flex:1
  }
})
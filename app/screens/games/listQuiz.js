/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity } from "react-native";
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
  ActivityIndicator,ListItem
} from "@react-native-material/core";
// import WheelOfFortune from 'react-native-wheel-of-fortune'
import Emoji from "react-native-emoji";
import Container from '../../container/container';
import {getQuizs,getPredictQuizs} from '../../actions/actions';
import {BannerAd} from '../../components/bannerAd';
export const ListQuiz = ({ navigation,route }) => {
  const {quiz_type} = route.params;
  const[title,setTitle] = useState(quiz_type)
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quizReducer);
  const {theme,colors} = useSelector(state => state.themeReducers)
  const {userDetails} = useSelector(state => state.userReducer)
  // console.log("data>>",quiz.data)
  // console.log("load",quiz.isLoading)
  useEffect(() => {
    if(quiz_type == 'predict'){
      dispatch(getPredictQuizs(userDetails.user_id,quiz_type));
    }else{
      dispatch(getQuizs(userDetails.user_id,quiz_type));
    }
    
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
  const navigateTo = (screen,data) =>{
    requestAnimationFrame(()=>{
      navigation.navigate('quiz',data)

    })
  }
  const getQuizList = () =>{
    requestAnimationFrame(() => {
      if(quiz_type == 'predict'){
        dispatch(getPredictQuizs(userDetails.user_id,quiz_type));
      }else{
        dispatch(getQuizs(userDetails.user_id,quiz_type));
      }
    });
  }
  const CardStyle = ({ quiz }) => {
    if(quiz_type=='predict' && quiz?.item?.taken ) {
      return (
        // <ListItem
        //     style={{padding:30}}
        //     leadingMode="avatar"
        //     leading={ <Text color='green'>₹ {0}</Text>} 
        //     title="correct %"
        // />
        <></>
      )
    }
    return (
      <TouchableOpacity  onPress={ () => navigateTo(quiz,{ques_id:quiz.item.id,quiz_type:quiz.item.quiz_type,duration:quiz.item.duration}) }  underlayColor={colors.secondary}>
        <Card
        containerStyle={{
          marginTop: 15,
          elevation: 10,
          borderColor: "#fff",
          backgroundColor: "#7267CB",
        }}
      >
        <Card.Title>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            {/* <View style={{flexDirection:'row'}}>
                <Text  color="white">
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
          <Text color="white">
            ₹ {quiz.item.total_coins}
          </Text>
          <Text color="white">{quiz.item.users_won} User Won</Text>
          <Button variant="text" color={theme.text} title={(quiz_type=='predict' && quiz.item.taken)? 'CHECK RESULT':'START'} onPress={()=> navigation.navigate('quiz',{ques_id:quiz.item.id,quiz_type:quiz.item.quiz_type,duration:quiz.item.duration})} />
        </View>
      </Card>
      </TouchableOpacity>
    );
  };
  if (quiz.isLoading) {
    return (
      <>
        <Header name={title} icon="arrow-back" navigation={navigation} />
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
      <Header name={title} icon="arrow-back" navigation={navigation} />
      {/* <Container style={{padding:0,paddingHorizontal:0}}> */}
        <FlatList
          data={quiz.data}
          renderItem={(item) => <CardStyle quiz={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          refreshing={quiz.isLoading}
          onRefresh={() => getQuizList()}
        />
        <BannerAd/>
      {/* </Container> */}
    </>
  );
};

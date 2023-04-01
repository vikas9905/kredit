import React,{useState,useEffect} from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
import Container from '../../container/container';
import { Text, Stack, Button } from "@react-native-material/core";
import { RadioButton } from 'react-native-paper';
import {Question} from '../../components/question';
export const QuizScreen = ({navigation})=>{
    const [checked, setChecked] = useState('first');
    const [resultCheckLoading, setResultChecked] = useState(false);
    const checkResult = () =>{
        setResultChecked(false)
    }
    const Ques = [
        {id:1, ques:'what is your name?',options:{"A":"Akash","B":"Vikash","C":"Rahul","D":"Ram"}},
        {id:2, ques:'what is your name?',options:{"A":"Akash","B":"Vikash","C":"Rahul","D":"Ram"}},
        {id:3, ques:'what is your name?',options:{"A":"Akash","B":"Vikash","C":"Rahul","D":"Ram"}},
        {id:4, ques:'what is your name?',options:{"A":"Akash","B":"Vikash","C":"Rahul","D":"Ram"}},
        {id:5, ques:'what is your name?',options:{"A":"Akash","B":"Vikash","C":"Rahul","D":"Ram"}}
    ]
    
    return (
      <>
        <Header name="Quiz" icon="arrow-back" navigation={navigation} />
        <Container>
          <FlatList
            data={Ques}
            renderItem={(item) => <Question ques={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator = {false}
          />
          <Button
            style={{height:40,marginBottom:5}}
            title="Check Result"
            loading={resultCheckLoading}
            loadingIndicatorPosition="overlay"
            onPress = {() => checkResult()}
          />
        </Container>
      </>
    );
}

const styles = StyleSheet.create({
    
})
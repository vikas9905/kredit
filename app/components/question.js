import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import { Text, Stack } from "@react-native-material/core";
import { RadioButton } from "react-native-paper";
import { useSelector, useDispatch , useStore} from "react-redux";
export const Question = (props) => {
    const {ques,index} = props
    const dispatch = useDispatch();
    const {userAnswers} = useSelector(state=> state.questionReducer)
    const {theme,colors} = useSelector(state => state.themeReducers)
    const [checked,setChecked] = useState()
    const getKeys = (obj,ind) =>{
        return obj[ind].id
    }
    const getVal = (obj,ind) =>{
        return obj[ind].optionValue
    }
    const setUserAnswers = (optionNum) =>{
        userAnswers.set(props.ques.item.ques.id,optionNum)
    }
  return (
    <>
      <View style={{ flex: 1, marginTop: 15 }}>
        <Text variant="h6">{props.ques.index +1 }.{props.ques.item.ques.question}</Text>
        <View>
          <RadioButton.Group
            onValueChange={(newValue) => {setChecked(newValue);setUserAnswers(newValue)}}
            value={checked}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value={getKeys(props.ques.item.options,0)} />
              <Text variant="subtitle1">{getVal(props.ques.item.options,0)}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value={getKeys(props.ques.item.options,1)}/>
              <Text variant="subtitle1">{getVal(props.ques.item.options,1)}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value={getKeys(props.ques.item.options,2)} />
              <Text variant="subtitle1">{getVal(props.ques.item.options,2)}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value={getKeys(props.ques.item.options,3)} />
              <Text variant="subtitle1">{getVal(props.ques.item.options,3)}</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

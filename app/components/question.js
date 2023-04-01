import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import { Text, Stack } from "@react-native-material/core";
import { RadioButton } from "react-native-paper";
export const Question = (props) => {
    const {ques,index} = props
    const [checked, setChecked] = useState('first');
    const getKeys = (obj,ind) =>{
        return Object.keys(obj)[ind]
    }
    const getVal = (obj,ind) =>{
        return obj[Object.keys(obj)[ind]]
    }
  return (
    <>
      <View style={{ flex: 1, marginTop: 15 }}>
        <Text variant="h6">{props.ques.index +1 }.{props.ques.item.ques}</Text>
        <View>
          <RadioButton.Group
            onValueChange={(newValue) => setChecked(newValue)}
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
              <Text variant="subtitle1">{getVal(props.ques.item.options,3)}</Text>
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

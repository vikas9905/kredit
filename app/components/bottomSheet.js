import React, { useState,useRef } from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import { StyleSheet,View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from '../container/container';
import {
    Text,
    Stack,
    Button,
    ActivityIndicator,
} from "@react-native-material/core";
import RBSheet from "react-native-raw-bottom-sheet";
export const BottomSheetComponent = ({isVisible}) => {
    const refRBSheet = useRef();
return (
  <Container>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
       <Text>Hello</Text>
      </RBSheet>
    </View>
  </Container>
);
};

const styles = StyleSheet.create({
button: {
  margin: 10,
},
});

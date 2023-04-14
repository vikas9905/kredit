/*eslint-disable*/
// import { Button, Dialog, Portal } from 'react-native-paper';
import React, { useState, useEffect } from "react";
import {
  Text,
  Stack,
  ActivityIndicator,
  Dialog,
  Button,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch , useStore} from "react-redux";
import Emoji from 'react-native-emoji';

export const Modal = (props) => {
  let explosion;
  const dispatch = useDispatch();
  const {result,visible} = props
  const handleExplosion = () => {
    explosion && explosion.start();
  };
  const closeModal = () =>{
    dispatch({type:'MODAL_CLOSE'})
    props.navigation.navigate('Home');
  }
  if (props.type == "congrats" && props.result.data != undefined) {
    console.log("result in modal",result)

    return (
      <>
        
        <Dialog visible={result.showModal} onDismiss={() => {closeModal();}}>
        {/* <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          autoStart={true}
          ref={(ref) => (explosion = ref)}
        /> */}
          <DialogHeader title="Congratulations" />
          <DialogContent>
            <Stack spacing={2}>
              <Text >Congrats you Win</Text>
              <Text >₹ {props.result.data.coin}</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Emoji name="clap" style={{fontSize: 30}} />
              <Emoji name="clap" style={{fontSize: 30}} />
              <Emoji name="clap" style={{fontSize: 30}} />
              <Emoji name="clap" style={{fontSize: 30}} />
              </View>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              title="Cancel"
              compact
              variant="text"
              onPress={() => closeModal()}
            />
            <Button
              title="Ok"
              compact
              variant="text"
              onPress={() => closeModal()}
            />
          </DialogActions>
        </Dialog>
      </>
    );
  }
  return <></>;
};

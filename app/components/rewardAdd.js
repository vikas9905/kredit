/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Button , Image, View, TouchableOpacity,StyleSheet} from 'react-native';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import {rewardUnitId} from '@env';
import {BusyIndicator} from '../components/busyIndicator';
import {ActivityIndicator,Text} from '@react-native-material/core';
import {useSelector,useDispatch} from 'react-redux';
import {REWARD_ADD_LOADED,REWARD_ADD_LOADING,REWARD_ADD_SHOW} from '../actions/actionTypes';
const adUnitId = rewardUnitId;

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export const RewardAdd = ({navigation,onPress}) => {
  const [loaded, setLoaded] = useState(false);
  const [indicatorLoading,setLoading] = useState(false);
  const { theme,colors } = useSelector((state) => state.themeReducers);
  const {rewardAdd} = useSelector(state=> state.addReducer);
  const dispatch = useDispatch();

  const loadAdd = () =>{
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
        setLoaded(true);
        dispatch({type:REWARD_ADD_LOADED})
      });
    const unsubscribeEarned = rewarded.addAdEventListener(
        RewardedAdEventType.EARNED_REWARD,
        reward => {
          console.log('User earned reward of ', reward);
        },
      );
      rewarded.load();
  }

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const checkAddLoaded = () =>{
    if(!rewardAdd.loaded) {
        dispatch({type:REWARD_ADD_LOADING})
        loadAdd()
    }else{
        rewarded.show();
    }
  }

  useEffect(()=>{
    console.log("RwardAdd",rewardAdd);
  },[rewardAdd])

  // No advert ready to show yet
  if (loaded) {
    // rewarded.show();
  }

  return (
    <TouchableOpacity underlayColor={colors.primaryDark} style={[styles.box,{backgroundColor:colors.primary}]} onPress={()=>checkAddLoaded()}>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            {!indicatorLoading && <Image source={require("../../assets/add.png")}   style={{width: 50, height: 50}} />}
            {indicatorLoading && <ActivityIndicator size="large" />}
            <Text  color="#fff">Increase Your Attempt</Text>
        </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    box:{
      width:120,
      height: 120,
      flex:1
    }
});
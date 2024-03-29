import React,{useState,useEffect} from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
import Container from '../../container/container';
import { Text, Stack, Button, ActivityIndicator } from "@react-native-material/core";
import { RadioButton } from 'react-native-paper';
import {Question} from '../../components/question';
import { useSelector, useDispatch , useStore} from "react-redux";
import {getQuestion,ValidateAnswers} from '../../actions/actions';
import {store} from '../../store/store';
import {LARGE_EXPLOSION} from '../../constant';
import ConfettiCannon from 'react-native-confetti-cannon';
import {Modal} from '../../components/modal';
import axios from 'axios';
import Constants from 'expo-constants';
import {VideoPlayerComponent} from '../../components/videoPlayer';
import { AudioPlayer} from "../../components/audioPlayer";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo";
export const QuizScreen = ({navigation,route})=>{
    const {ques_id} = route.params;
    console.log(ques_id)
    const dispatch = useDispatch();
    const {data,userAnswers,isLoading,result} = useSelector(state=> state.questionReducer)
    useEffect(()=>{
        dispatch(getQuestion(ques_id))
    },[])
    const componentDidMount = () => {
      AdMobInterstitial.setTestDeviceID("EMULATOR");
      // ALWAYS USE TEST ID for Admob ads
      AdMobInterstitial.setAdUnitID(Constants.manifest?.extra?.ADD_UNIT_ID_FOR_INTER);
      AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
        console.log("interstitialDidLoad")
      );
      AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
        console.log("interstitialDidFailToLoad")
      );
      AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
        console.log("interstitialDidOpen")
      );
      AdMobInterstitial.addEventListener("interstitialDidClose", () =>
        console.log("interstitialDidClose")
      );
      AdMobInterstitial.addEventListener("interstitialWillLeaveApplication", () =>
        console.log("interstitialWillLeaveApplication")
      );
    }
  const componentWillUnmount = () => {
      AdMobInterstitial.removeAllListeners();
    }
    const bannerError = () => {
      console.log("An error");
      return;
    }
  const showInterstitial = () => {
      AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd());
    }
    if(false) {
        return (
            <>
            <Header name="Quiz" icon="arrow-back" navigation={navigation} />
            <Container>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator size="large"/>
                    
                </View>
            </Container>
            </>
        )
    }
    return (
      <>
        <Header name="Quiz" icon="arrow-back" navigation={navigation} />
        <Container>
          <VideoPlayerComponent url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          {/* <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-2979993637425208/4663033032"
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="ORGMJBEA99K7D6R4"
          didFailToReceiveAdWithError={bannerError()}
        /> */}
        </Container>
      </>
    );
}

const styles = StyleSheet.create({
  interstitialBanner: {
    width: "100%",
    marginLeft: 0
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
})
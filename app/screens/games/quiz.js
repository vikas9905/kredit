/*eslint-disable*/
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
import {Modal} from '../../components/modal';
import axios from 'axios';
import {VideoPlayerComponent} from '../../components/videoPlayer';
import { AudioPlayer} from "../../components/audioPlayer";
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import {BannerAd} from '../../components/bannerAd';
import {Environment} from '../../../environment';
const base_url =Environment.BASE_URL;
export const QuizScreen = ({navigation,route})=>{
    const {ques_id,quiz_type,duration} = route.params;
    // console.log("quiz_type",quiz_type)
    console.log(ques_id)
    const dispatch = useDispatch();
    const {data,userAnswers,isLoading,result} = useSelector(state=> state.questionReducer)
    const {userDetails} = useSelector(state => state.userReducer)
    console.log("question_data>>>",data)
    // console.log("result_data",result)
    const [visible,setVisible] = useState(result.showModal);
    const [mediaPlayerState,setState] = useState({});
    const [isReady,setReady] = useState(false);
    const[countDown,setCountDown] = useState(duration);
    const adUnitId = 'ca-app-pub-2979993637425208/4663033032';

    const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();
    console.log("addloaded>>",loaded)

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);
    const checkResult = () =>{
        if(loaded){
          interstitial.show();
        }
        dispatch(ValidateAnswers(userAnswers,userDetails.user_id,ques_id))
        //showInterstitial();
    }
    useEffect(()=>{
        if(quiz_type == 'quiz') {
          setReady(true);
        }
        dispatch(getQuestion(ques_id))
        setCountDown()
    },[])
    if(isLoading) {
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
          { !isReady && <View style={{height:300}}>
            <VideoPlayerComponent state={setState} url={base_url+data[0].ques.url} />
          </View>
          }
          { !isReady && <View style={{height:250}}>
            <AudioPlayer setState={setState} url={base_url+data[0].ques.url} />
          </View>
          }
          {isReady && <FlatList
            data={data}
            renderItem={(item) => <Question ques={item} />}
            keyExtractor={item => item.ques.id}
            showsVerticalScrollIndicator = {false}
            refreshing = {isLoading}
            onRefresh = {()=> dispatch(getQuestion(ques_id))}
          />}
          {isReady && <Button
            style={{height:40,marginBottom:5}}
            title="Check Result"
            loading={result.isLoading}
            loadingIndicatorPosition="overlay"
            onPress = {() => {checkResult();}}
          />}
          {!isReady && <Button
            style={{height:40,marginBottom:5}}
            title="Next"
            onPress = {() => setReady(true)}
          />}
          <BannerAd/>
          <Modal visible={result.showModal} result={result} navigation={navigation} type="congrats"/>
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
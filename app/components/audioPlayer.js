/*eslint-disable*/
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet,TouchableOpacity,Text,Button} from 'react-native';
// import {FontAwesome,MaterialIcons} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
// import { Video, ResizeMode,Audio } from 'expo-av';
import { Stack, IconButton,ActivityIndicator } from "@react-native-material/core";
import {  LinearProgress } from '@rneui/themed';
export const AudioPlayer = ({name,title,color,backgroundColor,onPress,url,setState}) =>{
    // const {theme} = useSelector((state)=> state.themeReducers);
    // const [sound, setSound] = React.useState();
    // const [status, setStatus] = React.useState({isLoading:false,progress:0,icon:'play-circle-fill'});
    // // sound.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
    // const [count,setCount] =useState(0)
    // const playSound = async () => {

    //     // console.log('40-->Loading Sound');
    //     const { sound } = await Audio.Sound.createAsync({uri:url},{ shouldPlay: true });
    //     setSound(sound);
    //     // console.log(sound)
    //     sound.setOnPlaybackStatusUpdate(playbackStatus => {
    //         // console.log(playbackStatus)
    //         if (playbackStatus.isLoaded) {
    //             if (playbackStatus.error) {
    //               console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
    //             } else {
    //                 // console.log("position--->49")
    //                 const pct_complete = (playbackStatus.positionMillis)/(playbackStatus.durationMillis);
    //                 setState(playbackStatus);
    //                 let icon = 'pause-circle-filled';
    //                 if(!playbackStatus.isPlaying) {
    //                     icon = 'play-circle-fill';
    //                 }
    //                 setStatus({isLoading:false,progress:pct_complete,icon:icon})
    //                 if (playbackStatus.isPlaying) {
    //                     // console.log("52",playbackStatus)
    //                 } else {
    //                   // Update your UI for the paused state
    //                 }
                
    //                 if (playbackStatus.isBuffering) {
    //                 //   console.log("buffering")
    //                 }
                
    //                 if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
    //                 //   console.log("finished")
    //                 }
    //               }
    //         }
    //     });
    //     await sound.playAsync();
    //   }
    
    //   React.useEffect(() => {
    //     return sound
    //       ? () => {
    //           console.log('73-->Unloading Sound');
    //           sound.unloadAsync();
    //         }
    //       : undefined;
    //   }, [sound]);
    //   const playAndPause = (type) =>{
    //     console.log(count)
    //     if(count == 0){
    //         playSound();
    //         setCount(count+1)
    //     } else{

    //     }
    //   }
    // return (
    //     <>
     
    //     <View style={styles.container}>
    //         {status.isLoading && <View
    //         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    //         >
    //             <ActivityIndicator size="large" />
    //         </View>}
    //         {!status.isLoading && 
    //             <View style={{flex:1}}>
    //             <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    //                 <IconButton
    //                     icon={props => <MaterialIcons  name={status.icon} {...props} />}
    //                     color="primary"
    //                     onPress={()=>playAndPause('play')}
    //                 />
    //                 <LinearProgress
    //                     style={{ marginVertical: 20 }}
    //                     value={status.progress}
    //                     color="primary"
    //                     variant="determinate"
    //                 />
    //             </View>
    //                 <Text  style={{marginTop:20}} color="error">Note: Audio will be played only one time</Text>
    //             </View>
                
    //         }
            
    //     </View>
       
    //     </>
    // )
    return (
        <></>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex:1,
      justifyContent:'center',
      marginTop:15,
      flexDirection:'row',
      padding:30,
    },
    audio:{
        width:'100%',
        height:300
    }
  })
  
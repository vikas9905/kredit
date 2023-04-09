import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet,TouchableOpacity,Text,Button} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { Video, ResizeMode } from 'expo-av';
export const VideoPlayerComponent = ({name,title,color,backgroundColor,onPress,url,state}) =>{
    const {theme} = useSelector((state)=> state.themeReducers);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    console.log("url",url)
    const handleLoaded = () =>{
        console.log('loading')
    }
    const handleError = () =>{
        console.log("error")
    }
    return (
        <>
     
        <View style={styles.container}>
            <Video
            ref={video}
            style={styles.video}
            source={{
            uri: url,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay={true}
            onLoad={()=>handleLoaded()}
            onError={()=>handleError()}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => {setStatus(() => status);state(status)}}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
        </View>
        {/* <Video  
            source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"                  // the video file
            paused={false}                  // make it start      // any style you want
            repeat={true}        
            style={{width:200,height:200}}           // make it a loop
        /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      marginTop:15
    //   padding:30,
    },
    video:{
        width:'100%',
        height: 250
    }
  })
  
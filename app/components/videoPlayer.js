/*eslint-disable*/
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, {useState} from 'react';
import {View, Pressable,StatusBar,StyleSheet,TouchableOpacity,Text,Button} from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Video from 'react-native-video';
import {ActivityIndicator} from "@react-native-material/core";
// import { Video, ResizeMode } from 'expo-av';
export const VideoPlayerComponent = ({name,title,color,backgroundColor,onPress,url,state}) =>{
    // const {theme} = useSelector((state)=> state.themeReducers);
    // const video = React.useRef(null);
    // const [status, setStatus] = React.useState({});
    // console.log("url",url)
    // const handleLoaded = () =>{
    //     console.log('loading')
    // }
    // const handleError = () =>{
    //     console.log("error")
    // }
    // return (
    //     <>
     
    //     <View style={styles.container}>
    //         <Video
    //         ref={video}
    //         style={styles.video}
    //         source={{
    //         uri: url,
    //         }}
    //         rate={1.0}
    //         volume={1.0}
    //         isMuted={false}
    //         shouldPlay={true}
    //         onLoad={()=>handleLoaded()}
    //         onError={()=>handleError()}
    //         useNativeControls
    //         resizeMode={ResizeMode.CONTAIN}
    //         isLooping
    //         onPlaybackStatusUpdate={status => {setStatus(() => status);state(status)}}
    //   />
    //   {/* <View style={styles.buttons}>
    //     <Button
    //       title={status.isPlaying ? 'Pause' : 'Play'}
    //       onPress={() =>
    //         status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
    //       }
    //     />
    //   </View> */}
    //     </View>
    //     {/* <Video  
    //         source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"                  // the video file
    //         paused={false}                  // make it start      // any style you want
    //         repeat={true}        
    //         style={{width:200,height:200}}           // make it a loop
    //     /> */}
    //     </>
    // )
    const[isBuffering,setBuffer] = useState(true);
    const[isError,setError] = useState(false);
    const[isLoaded,setLoaded] = useState(false);
    const checkBuffering = () =>{
      if(!isLoaded){
        setBuffer(true);
      }else{
        setBuffer(false);
      }
    }
    const onLoadComplete =() =>{
      setBuffer(false);
      setLoaded(true);
      setError(false)
    }
    return(
      <>
        <Video source={{uri: url}}   // Can be a URL or a local file.
          ref={(ref) => {
            //console.log(ref)
          }}                                      // Store reference
          onBuffer={()=> {checkBuffering();console.log("buffering...")}}                // Callback when remote video is buffering
          onError={()=>{console.log("error..");setError(true)}}  
          onLoadStart={()=>{console.log("loading started");setError(false);checkBuffering()}}
          onLoad={()=>{onLoadComplete();console.log("loaded..")}}
          audioOnly={false}
          controls={true}
          paused={true} 
          resizeMode="contain"            // Callback when video cannot be loaded
          style={styles.video} />
          {isBuffering && <ActivityIndicator color="#fff" size="large" style={styles.videoLoader} />}
          {isError && <Text style={{color:'red'}}>Some Error Occured</Text>}
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
    },
    videoLoader:{
      position: 'absolute',
        top: 90,
        left: 70,
        right: 70,
        height: 50,
    }
  })
  
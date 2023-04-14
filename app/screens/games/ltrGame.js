/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, StyleSheet,Dimensions,Easing,Animated } from "react-native";
import Header from "../../components/homeComponent";
import { Card } from "@rneui/base";
import { TabBar } from "../../components/bottomComponent";
import { Icon } from "@rneui/base";
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  Button,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
// import WheelOfFortune from 'react-native-wheel-of-fortune'
import Emoji from "react-native-emoji";
import Container from '../../container/container';
import {getQuizs} from '../../actions/actions';
import Animate from '../../components/animateLTR';
export default LtrGame = ({ navigation }) => {
    const left = 200;
    const duration = 3000;
    const leftP = 300;
    const right = new Animated.Value(Dimensions.get('window').width - 200);
    const [leftPosition, setLeftPosition] = useState(new Animated.Value (0));
    componentDidMount = () => {
       // this.leftPosition === 0 ? this.mooveLR () : this.mooveRL () // repeats always when the red box return to its initial position : leftPosition === 0
    }
    useEffect(()=>{
        left === 0 ? mooveLR () : mooveRL () // repeats always when the red box return to its initial position : leftPosition === 0
    },[])
    const mooveLR = () => {
        Animated.timing(leftPosition, {
          toValue: 100,
          duration, 
          easing: Easing.linear,
          //useNativeDriver: true, 
        }).start(); 
      };
    
      const mooveRL = () => {
        Animated.timing(leftPosition, {
          toValue: 0,
          duration, 
          easing: Easing.linear, 
          //useNativeDriver: true, 
        }).start(); 
      };
  return (
    <>
      <Header name="LtrGame" icon="menu" navigation={navigation} />
      <Container>
        <View  style={{flexDirection:'row',flex:9,marginTop:20,alignItems:'center'}}>
          <View style={styles.box}>
            <Box h={50} m={4} w={50} style={{ backgroundColor: "tomato" }}>
                <Text style={{alignItems:'center'}}>6</Text>
            </Box>
            <Box h={50} w={50} m={4} style={{ backgroundColor: "tomato" }}>
                <Text>6</Text>
            </Box>
            <Box h={50} m={4} w={50} style={{ backgroundColor: "tomato" }}>
                <Text>6</Text>
            </Box>
            <Box h={50} m={4} w={50} style={{ backgroundColor: "tomato" }}>
                <Text>6</Text>
            </Box>
            <Box h={50} m={4} w={50} style={{ backgroundColor: "tomato" }}>
                <Text>6</Text>
            </Box>
          </View>
        </View>
        {/* <Animated.View style={[{ left: leftPosition }]}>
            <View style={styles.triangle}></View>
        </Animated.View> */}
        <Animate left={true} duration={1000} leftP={-Dimensions.get('window').width}>
            <View style={styles.triangle}></View>
        </Animate>
        {/* <View  style={{flexDirection:'row',flex:2,marginTop:20,alignItems:'center'}}> */}
            
        {/* </View> */}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
    box: {
        height: 100,
        flex: 1,
    //     backgroundColor: "transparent",
    // borderStyle: "solid",
    // borderLeftWidth: 50,
    // borderRightWidth: 50,
    // borderBottomWidth: 100,
    // borderLeftColor: "transparent",
    // borderRightColor: "transparent",
    // borderBottomColor: "red",
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderLeftColor: '#000',
    borderRightWidth: 4,
    borderRightColor: '#000',
    borderBottomWidth: 4,
    borderBottomColor: '#000',
    borderTopWidth: 4,
    borderTopColor: '#000',
    flexDirection:'row'

    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",

      },
})

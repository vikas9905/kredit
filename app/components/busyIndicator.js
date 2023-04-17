/*eslint-disable*/
import Header from "../components/homeComponent";
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  Button,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
// import WheelOfFortune from 'react-native-wheel-of-fortune'
import Container from '../container/container';
import {View} from 'react-native';
import { Header as HeaderRNE, HeaderProps,Badge,Avatar } from '@rneui/themed';

export const BusyIndicator = ({navigation,name,icon}) =>{
    return (
      <>
        <Header name={name} icon={icon} navigation={navigation} />
        <Container>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        </Container>
        </>
    )
  }
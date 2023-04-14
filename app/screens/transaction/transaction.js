/*eslint-disable*/

import React,{useState,useEffect,useRef} from 'react'
import { View, SafeAreaView } from 'react-native'
// import auth from '@react-native-firebase/auth';
import Header from '../../components/homeComponent';
import { Icon , Input,Tab,TabView} from '@rneui/themed';
import Container from '../../container/container';
import { Card } from "@rneui/base";
import {
    Text,
    Stack,
    Button,
    ActivityIndicator,
    TextInput,Box,Flex,Divider,ListItem,Avatar
  } from "@react-native-material/core";
import {BottomSheetComponent} from '../../components/bottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import {VideoPlayerComponent} from '../../components/videoPlayer';
import {AudioPlayer} from '../../components/audioPlayer';

export default Transaction = ({navigation})=>{
    const [isVisible,setIsVisible] = useState(false);
    const [upiError,setUpiError] = useState('UPI Error');
    const [amountError,setAmountError] = useState('');
    const refRBSheet = useRef();
    const [index, setIndex] = React.useState(0);
    const {theme,colors} = useSelector(state => state.themeReducers);
    
    return (
      <>
        <Header name="Earnings" icon="arrow-back" navigation={navigation} />
        <Container style={{backgroundColor:colors.background}}>
        <Flex fill >
          <Box
            h={120}
            style={{ flex: 1, marginTop: 15, backgroundColor: colors.primary }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                padding: 10,
                alignItems: "center",
              }}
            >
              <Text  color={theme.text}>
                Available Balance
              </Text>
              <Text  color={theme.text}>
                ₹100
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                variant="text"
                title="Withdraw"
                onPress={() => refRBSheet.current.open()}
                color={theme.text}
              />
            </View>
          </Box>
          <Flex
            fill
            style={{ flex: 4, marginTop: 10 }}
          >
            <Text >History</Text>
            <Divider style={{ marginTop: 10, backgroundColor: "#000000" }} />
              <ListItem
                leadingMode="avatar"
                leading={
                  <Text color='green'>₹ 100</Text>
                }
                title="Coins Credited"
              />
          </Flex>
        </Flex>

        </Container>

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={270}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <Container>
            <Input
              placeholder="UPI NUMBER"
              renderErrorMessage={false}
              errorMessage={upiError}
              selectionColor={theme.headerColor}
            />
            <Input placeholder="Name" renderErrorMessage={false} />
            <Input
              placeholder="Amount"
              inputStyle="numeric"
              renderErrorMessage={false}
              errorMessage={amountError}
            />
            <Button
              variant="contained"
              title="SUBMIT"
              onPress={() => console.log("Pressed")}
              style={{ marginTop: 30 }}
            />
          </Container>
        </RBSheet>
      </>
    );
}
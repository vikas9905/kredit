/*eslint-disable*/

import React,{useState,useEffect,useRef} from 'react'
import { View, SafeAreaView,FlatList } from 'react-native'
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
    Box,Flex,Divider,ListItem,Avatar
  } from "@react-native-material/core";
import {BottomSheetComponent} from '../../components/bottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useSelector,useDispatch} from 'react-redux';
import {VideoPlayerComponent} from '../../components/videoPlayer';
import {AudioPlayer} from '../../components/audioPlayer';
import {getUserCreditDebitHistory} from '../../actions/actions';
import {BusyIndicator} from '../../components/busyIndicator';
import { Snackbar } from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {orderRequest} from '../../actions/actions';

export default Transaction = ({navigation})=>{
    const [isVisible,setIsVisible] = useState(false);
    const [upiError,setUpiError] = useState('UPI Error');
    const [amountError,setAmountError] = useState('');
    const refRBSheet = useRef();
    const [index, setIndex] = React.useState(0);
    const {theme,colors} = useSelector(state => state.themeReducers);
    const {userDetails,history,order} = useSelector(state => state.userReducer);
    const [ammount,setAmmount] = useState();
    const [showSanck,setSnack] = useState(false)
    const [snackMsg,setSnackMsg] = useState('')
    const dispatch = useDispatch()
    const ListDebitCredit = ({transaction}) =>{
      console.log(transaction)
      return (
        <View style={{marginTop:5}}>
          {transaction.item?.credit != 0 && <ListItem
            leadingMode="avatar"
            leading={ <Text color='green'>₹ {transaction?.item?.credit || 0}</Text>} 
            title="Coins Credited"
          />}
          {transaction.item?.debit != 0 && <ListItem
            leadingMode="avatar"
            leading={ <Text color='red'>₹ {transaction?.item?.debit || 0}</Text>} 
            title= {transaction.item?.status}
          />}
        </View>
      )
    }
    const onAmmountTextChange = (text) =>{
      if(isNaN(text)) {
        setAmountError(true);
      }else{
        setAmountError(false);
      }
      setAmmount(text)
    }
    const placeOrder = () =>{
      if(amountError) {
        refRBSheet.current.close();
        setSnack(true);
        setSnackMsg("Only numbers allowed")
        return;
      }
      if(history?.data?.available_coin < ammount && ammount > 0) {
        refRBSheet.current.close();
        setSnack(true);
        setSnackMsg("Can not withdraw given ammount");
        return;
      }
      if(userDetails.paymentDetails?.payment_num == undefined) {
        refRBSheet.current.close();
        setSnack(true);
        setSnackMsg("PleaseSave paymentDetails in setting");
        return;
      }
      const data ={
        order_id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        user_id: userDetails.user_id,
        ammount_requested: ammount,
        used_coin: ammount,
        payment_option: userDetails.user_id
      }
      dispatch(orderRequest(data));
    }
    useEffect(()=>{
      dispatch(getUserCreditDebitHistory(userDetails.user_id))
    },[])

    if(history.loading) {
      return (
        <BusyIndicator navigation={navigation} name="Earnings" icon="arrow-back" />
      )
    }
    
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
                ₹ {history?.data?.available_coin || 0}
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
            {history?.data?.history != undefined && <FlatList
              data={history.data.history}
              renderItem={(item) => <ListDebitCredit transaction={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              refreshing={history.loading}
              onRefresh={() => dispatch(getUserCreditDebitHistory(userDetails.user_id))}
            />}
            <View >
              <Snackbar
                visible={showSanck}
                onDismiss={() => {setSnack(false)}}
                action={{
                  label: 'OK',
                  onPress: () => {
                    setSnack(false)
                  },
                }}>
                {snackMsg}
              </Snackbar>
            </View>
          </Flex>
        </Flex>

        </Container>

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={200}
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
            {/* <Input
              placeholder="UPI NUMBER"
              renderErrorMessage={false}
              errorMessage={upiError}
              selectionColor={theme.headerColor}
            />
            <Input placeholder="Name" renderErrorMessage={false} /> */}
            <TextInput
              label="Amount"
              error={amountError}
              mode="standard"
              onChangeText ={(text)=>{
                onAmmountTextChange(text)
              }}
            />
            <Button
              variant="contained"
              title="SUBMIT"
              loading={order.loading}
              loadingIndicatorPosition="overlay"
              onPress={() => placeOrder()}
              style={{ marginTop: 15 }}
            />

          </Container>
        </RBSheet>
      </>
    );
}
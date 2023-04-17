/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { View, SafeAreaView,StyleSheet } from 'react-native'
import Header from '../../components/homeComponent';
import { Icon } from '@rneui/themed';
import Container from '../../container/container';
import {
    Text,
    Stack,
    Button,
    ActivityIndicator,
    Box,Flex,Divider,ListItem,Avatar
  } from "@react-native-material/core";
import { TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector} from 'react-redux';
import {getUserDetails,updateUserPaymentOption,setUserPaymentOption} from '../../actions/actions';
import {BusyIndicator} from '../../components/busyIndicator';
export default Profile = ({navigation})=>{
    const paymentOptions = ['Paytm','PhonePe']
    const {theme,colors} = useSelector(state=>state.themeReducers)
    const {userDetails} = useSelector(state => state.userReducer)
    const [upiError,setUpiError] = useState(false)
    const [upiNumber,setUpiNumber] = useState()
    const [name,setName] = useState(userDetails.user_name);
    const [paymentProvider,setPaymentProvider] = useState();
    const [updatingDetails,setLoading] = useState(false);
    console.log("userDetails in profile",userDetails)
    const onUpiTextChange = (text) =>{
      if(isNaN(text)){
        setUpiError(true);
      }else{
        setUpiError(false);
      }
      setUpiNumber(text)
    }
    const updateUserPaymentDetails = () =>{
      const data = {
        user_id: userDetails.user_id,
        name: name,
        payment_num: upiNumber,
        provider: paymentProvider
      }
      if(userDetails.paymentDetails?.payment_num == undefined) {
        dispatch(setUserPaymentOption(data))
      }else{
        dispatch(updateUserPaymentOption(data))
      }
    }
    useEffect(()=>{
      getUserDetails(userDetails.user_id)
    },[])
    if(userDetails.loading){
      return (
        <BusyIndicator navigation={navigation} name="Profile" icon="arrow-back" />
      )
    }
    return (
      <>
        <Header name="Profile" icon="arrow-back" navigation={navigation} />
        {/* <Container> */}
        <Flex fill>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.headerColor,
              marginTop: -22
            }}
          >
            <Avatar
              image={{ uri: userDetails?.profile_pic || "https://mui.com/static/images/avatar/1.jpg" }}
            />
            <Text color={theme.text}>
              {userDetails?.user_name || 'Guest'}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text  color={theme.text}>
                Total Earnings
              </Text>
              <Text  color={theme.text} style={{ marginLeft: 15 }}>
                ₹{userDetails?.total_coins || 0}
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, marginTop: 20, justifyContent: "center" }}>
            <Container style={{ padding: 10 }}>
              <Text >Edit payment Details</Text>
              <View style={{ marginTop: 10 }}>
                <TextInput
                  mode="outlined"
                  label="Name"
                  style={{ marginTop: 10 }}
                  onChangeText = {(text)=>setName(text)}
                />
                <TextInput
                  mode="outlined"
                  label="UPI NUMBER"
                  style={{ marginTop: 10 }}
                  error={upiError}
                  onChangeText={(text)=>{onUpiTextChange(text)}}
                />
                <SelectDropdown
                  data={paymentOptions}
                  buttonStyle={styles.selectButton}
                  buttonTextStyle ={styles.selectButtonText}
                  onSelect={(selectedItem, index) => {
                    setPaymentProvider(index+1);
                  }}
                  defaultButtonText="Select Payment Options"
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
                <Button variant="contained" title="SUBMIT" style={{marginTop:20}} loading={userDetails.paymentDetails.loading}
                loadingIndicatorPosition="overlay" onPress={()=>updateUserPaymentDetails()}></Button>
              </View>
            </Container>
          </View>
        </Flex>

        {/* </Container> */}
      </>
    );
}

const styles = StyleSheet.create({
    selectButton: {
        backgroundColor:'#fff',
        marginTop:10,
        width:'100%',
        borderRadius:5,
        borderColor:'red'
    },
    selectButtonText:{
        color:'#000',
    }
})
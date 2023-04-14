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
export default Profile = ({navigation})=>{
    const paymentOptions = ['Paytm','PhonePe','GooglePay']
    const {theme,colors} = useSelector(state=>state.themeReducers)
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
              image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            />
            <Text color={theme.text}>
              Vikash
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
                ₹100
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
                />
                <TextInput
                  mode="outlined"
                  label="UPI NUMBER"
                  style={{ marginTop: 10 }}
                />
                <SelectDropdown
                  data={paymentOptions}
                  buttonStyle={styles.selectButton}
                  buttonTextStyle ={styles.selectButtonText}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText="Select Payment Options"
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
                <Button variant="contained" title="SUBMIT" style={{marginTop:20}}></Button>
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
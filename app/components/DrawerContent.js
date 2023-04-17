/*eslint-disable*/
import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    useTheme,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { Avatar } from "@react-native-material/core";
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
// import { MaterialCommunityIcons, AntDesign ,Feather} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthNavigator from '../routings/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS_FAILED} from '../actions/actionTypes';
import {useDispatch,useSelector} from 'react-redux';
import {signOut} from '../actions/actions';
export function DrawerContent({navigation,props}) {

    const paperTheme = useTheme();
    const dispatch = useDispatch();
    const [isLoggedIn,setLogin] = useState(true)
    const {userDetails} = useSelector(state=> state.userReducer);
    
    // const getAuth = () =>{
    //     return (<AuthNavigator/>)
    // }
    // useEffect(()=>{
    //     if(!isLoggedIn){
    //        getAuth();
    //     }
    // },[])

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} style={{backgroundColor:'#fff'}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15,}}>
                            <Avatar
                                image={{ uri: userDetails.profile_pic}}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{userDetails.user_name}</Title>
                                {/* <Caption style={styles.caption}>@j_doe</Caption> */}
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                               <Text >Total Earnings:</Text>
                                <Text style={{marginLeft:15,color:'green'}}>₹{userDetails?.total_coins || 0}</Text>
                            </View>
                            {/* <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View> */}
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            )}
                            label="Earnings"
                            onPress={() => {navigation.navigate('Earn')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require("../../assets/quiz.png")}   style={{width: 23, height: 23}}/>
                            )}
                            label="Quiz"
                            onPress={() => {navigation.navigate('listQuiz',{quiz_type:'kbc'})}}
                        />
{/*                         
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Casino"
                            onPress={() => {props.navigation.navigate('casino')}}
                        /> */}
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Feather 
                                name="settings" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {navigation.navigate('Profile')}}
                        />
                    
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="logout" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

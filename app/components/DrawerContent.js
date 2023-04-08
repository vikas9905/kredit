import React from 'react';
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
import { MaterialCommunityIcons, AntDesign ,Feather} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props) {

    const paperTheme = useTheme();



    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} style={{backgroundColor:'#fff'}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15,}}>
                            <Avatar
                                image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                               <Text variant="h6">Total Earnings:</Text>
                                <Text variant="h6" style={{marginLeft:15,color:'green'}}>₹100</Text>
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
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="currency-inr" color={color} size={size} />
                            )}
                            label="Earnings"
                            onPress={() => {props.navigation.navigate('Earn')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require("../../assets/quiz.png")}   style={{width: 23, height: 23}}/>
                            )}
                            label="Quiz"
                            onPress={() => {props.navigation.navigate('listQuiz')}}
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
                            onPress={() => {props.navigation.navigate('Profile')}}
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
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
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

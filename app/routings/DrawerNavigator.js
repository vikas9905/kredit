import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import Home from '../screens/home/Home';
import Profile from '../screens/proffile/proffile';
import Header from '../components/homeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './BottomTabBar';
import { DrawerContent } from '../components/DrawerContent';
const Drawer = createDrawerNavigator();
export const DrawerLayout = ({navigation}) =>{
    return (
        
    <Drawer.Navigator screenOptions={{headerShown:false}} 
        drawerContent={(props) => <DrawerContent {...props} />} >
            <Drawer.Screen name="HomeDrawer" component={MyTabs} />
            <Drawer.Screen name="Profile1" component={Profile} />
            <Drawer.Screen name="Home2" component={Home} />
            <Drawer.Screen name="Profile2" component={Profile} />
            <Drawer.Screen name="Home3" component={Home} />
            <Drawer.Screen name="Profile3" component={Profile} />
    </Drawer.Navigator>
        
       
      );
}
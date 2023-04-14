/*eslint-disable*/
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons , Feather} from '@expo/vector-icons';
import Profile from '../screens/proffile/proffile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/home/Home';
import { DrawerLayout } from './DrawerNavigator';
import Quiz from '../screens/games/quiz';
import Transaction from '../screens/transaction/transaction';
import LeaderBoard from '../screens/leaderboard/leaderboard';
import ListQuiz from '../screens/games/listQuiz';
import LtrGame from '../screens/games/ltrGame';
import {useSelector} from 'react-redux';
// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export const MyTabs = ({navigation}) => {
  const {theme,colors} = useSelector(state=>state.themeReducers);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      style={{backgroundColor:'red'}}
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerShown:false,
        tabBarStyle:{
        backgroundColor: theme.headerColor
        }
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Earn"
        component={Transaction}
        options={{
          tabBarLabel: 'Earnings',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="currency-inr" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarLabel: 'Leaderboard',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" color={color} size={size} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'User',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
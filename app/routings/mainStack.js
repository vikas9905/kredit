/*eslint-disable*/
import React from 'react';
import {createStackNavigator, HeaderStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import  routeList  from './route';
import Home from '../screens/home/Home';
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions';
import config from '../config'
import {DrawerLayout }from './DrawerNavigator';
import Profile from '../screens/proffile/proffile';
import {QuizScreen} from '../screens/games/quiz';
import { MyTabs } from './BottomTabBar';
import {CasinoScreen} from '../screens/games/casino';
import {ListQuiz} from '../screens/games/listQuiz';
import {Transaction} from '../screens/transaction/transaction';
const Stack = createStackNavigator();

export default function MainStack() {
    
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerLayout" component={DrawerLayout} options={{headerShown:false}}/>
        <Stack.Screen name="quiz" component={QuizScreen} options={{headerShown:false}} />
        <Stack.Screen name="listQuiz" component={ListQuiz} options={{headerShown:false}} />
      </Stack.Navigator>
   
  );
}

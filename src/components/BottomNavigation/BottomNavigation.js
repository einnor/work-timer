import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeView from '../Home/HomeView';
import FinishView from '../Finish/FinishView';
import HistoryView from '../History/HistoryView';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
 return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeView} />
      <HomeStack.Screen name="Finish" component={FinishView} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="History" component={HistoryView} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

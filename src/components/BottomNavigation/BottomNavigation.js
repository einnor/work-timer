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
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#6d6d6d',
        inactiveTintColor: '#a3a3a3',
        labelStyle: {
          fontSize: 30,
        },
        style: {
          backgroundColot: '#e0e0e0',
          borderColor: 'rgba(140, 149, 140, 0.8)',
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="History" component={HistoryView} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

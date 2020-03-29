import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeView from '../Home/HomeView';
import HistoryView from '../History/HistoryView';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="History" component={HistoryView} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

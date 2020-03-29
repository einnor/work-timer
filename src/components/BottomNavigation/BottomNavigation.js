import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeView from '../Home/HomeView';
import FinishView from '../Finish/FinishView';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Finish" component={FinishView} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

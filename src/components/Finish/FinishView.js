import React, { useState } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from '../ActionButton/ActionButton';
import i18n from '../../i18n/en';
import { ACTIVITY_STORAGE_KEY} from '../../config/constants';

const FinishView = ({ navigation, route }) => {
  const { timeSpent } = route.params;
  const [name, setName] = useState('');

  const onSave = async () => {
    const activities = JSON.parse(await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY)) || [];
    const date = new Date().getTime();
    activities.push({
      name,
      timeSpent,
      date,
    });
    await AsyncStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(activities));
    navigation.goBack();
  };

  return (
    <View>
      <Text>Finished</Text>
    </View>
  );
};

export default FinishView;


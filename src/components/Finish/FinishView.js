import React, { useState } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from '../ActionButton/ActionButton';
import i18n from '../../i18n/en';
import { ACTIVITY_STORAGE_KEY} from '../../config/constants';

import styles from './FinishViewStyles';

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

  const onCancel = () => {
    navigation.goBack();
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 0.1 }} />
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{i18n.FINISH.MAIN_HEADER}</Text>
        </View>
      </View>
      <View style={{ flex: 0.1 }} />
    </View>
  );
};

export default FinishView;


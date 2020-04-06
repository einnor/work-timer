import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{i18n.FINISH.MAIN_HEADER}</Text>
          <Text style={styles.subHeader}>{moment.utc(timeSpent).format(i18n.TIME_FORMAT)}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.activityNameLabel}>{i18n.FINISH.ACTIVITY_NAME_LABEL}</Text>
          <TextInput
            style={styles.activityNameInput}
            value={name}
            onChangeText={(txt) => setName(txt)}
          />
        </View>
        <View style={{ flex: 5 }}>
            <View style={styles.actionButtonsContainer}>
              <ActionButton
                onPress={onCancel}
                label={i18n.CANCEL}
                backgroundColor={'#F39527'}
                textColor={'#fff'}
              />
              <ActionButton
                onPress={onSave}
                label={i18n.SAVE}
                backgroundColor={'#00CD5E'}
                textColor={'#fff'}
                />
            </View>
          </View>
        </View>
      <View style={{ flex: 0.1 }} />
    </View>
  );
};

export default FinishView;


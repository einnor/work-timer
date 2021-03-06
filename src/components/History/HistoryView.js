import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import i18n from '../../i18n/en';
import { ACTIVITY_STORAGE_KEY } from '../../config/constants';

import styles from './HistoryViewStyles';

const HistoryView = () => {
  const [activities, setActivities] = useState([]);
  const getActivities = async () => {
    const activities = JSON.parse(await AsyncStorage.getItem(ACTIVITY_STORAGE_KEY)) || [];
    setActivities(activities.reverse());
  };

  useEffect(() => {
    getActivities();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemNameText}>{item.name}</Text>
        </View>
        <View style={styles.itemDetailsContainer}>
          <View>
            <Text style={styles.itemDetailsText}>{moment.utc(item.date).format(i18n.DATE_FORMAT)}</Text>
          </View>
          <View>
            <Text style={styles.itemDetailsText}>{moment.utc(item.timeSpent).format(i18n.TIME_FORMAT)}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <Text style={styles.header}>{i18n.HISTORY.SAVED_ACTIVITIES}</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name.replace(/\s/g, '-')}-${index}`}
      />
    </>
  );
};

export default HistoryView;


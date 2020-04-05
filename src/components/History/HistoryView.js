import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import moment from 'moment';
import i18n from '../../i18n/en';

const HistoryView = () => {
  const [activities, setActivities] = useState([]);
  const getActivities = async () => {
    const activities = JSON.parse(await AsyncStorage.getItem('@activities')) || [];
    setActivities(activities);
  };

  useEffect(() => {
    getActivities();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <Text>{item.name}</Text>
        </View>
        <View>
          <View>
            <Text>{moment.utc(item.date).format(i18n.DATE_FORMAT)}</Text>
          </View>
          <View>
            <Text>{moment.utc(item.timeSpent).format(i18n.TIME_FORMAT)}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <Text>{i18n.HISTORY.SAVED_ACTIVITIES}</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name.replace(/\s/g, '-')}-${index}`}
      />
    </>
  );
};

export default HistoryView;


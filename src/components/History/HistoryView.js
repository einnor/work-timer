import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

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
          <Text>{item.date}</Text>
          <Text>{item.timeSpent}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <Text>Saved Activities</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name.replace(/\s/g, '-')}-${index}`}
      />
    </>
  );
};

export default HistoryView;


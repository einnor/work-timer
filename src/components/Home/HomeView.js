import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './HomeViewStyles';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.welcomeHeader}>Good Morning!</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => {}} style={styles.mainActionButton}>
          <Text style={styles.mainActionButtonText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;

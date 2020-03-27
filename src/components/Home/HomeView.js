import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import i18n from '../../i18n/en';
import styles from './HomeViewStyles';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => {}} style={styles.mainActionButton}>
          <Text style={styles.mainActionButtonText}>{i18n.HOME.START}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;

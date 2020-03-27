import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import i18n from '../../i18n/en';
import styles from './HomeViewStyles';

const HomeView = () => {
  const [state, setState] = useState({
    time: 0,
  });

  const renderStartButton = () => {
    return (
      <TouchableOpacity onPress={() => {
        setInterval(() => {
          setState((prevState) => ({ ...prevState, time: prevState.time + 1000 }));
        }, 1000);
      }} style={styles.mainActionButton}>
        <Text style={styles.mainActionButtonText}>{i18n.HOME.START}</Text>
      </TouchableOpacity>
    );
  };

  const renderRunningTimer = () => {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.mainActionButton}>
        <Text style={styles.mainActionButtonText}>{state.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={{ flex: 2 }}>
        {state.time > 0 ? renderRunningTimer() : renderStartButton()}
      </View>
    </View>
  );
};

export default HomeView;

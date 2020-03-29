import React, { useState, useEffect } from 'react';
import { View, Text, AppState } from 'react-native';

import i18n from '../../i18n/en';
import styles from './HomeViewStyles';
import StopwatchButton from '../StopwatchButton/StopWatchButton';

const HomeView = () => {
  const [state, setState] = useState({
    time: 0,
    paused: false,
  });

  const handleAppStateChange = (nextAppState) => {
    console.log(nextAppState);
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  const startTimer = () => {
    setInterval(() => {
      setState((prevState) => ({ ...prevState, time: prevState.paused ? prevState.time : prevState.time + 1000 }));
    }, 1000);
  };

  const pauseTimer = () => {
    setState((prevState) => ({ ...prevState, paused: !prevState.paused }));
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <StopwatchButton
          time={state.time}
          onStart={startTimer}
          onPause={pauseTimer}
        />
      </View>
    </View>
  );
};

export default HomeView;

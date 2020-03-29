import React, { useState, useEffect } from 'react';
import { View, Text, AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import i18n from '../../i18n/en';
import styles from './HomeViewStyles';
import StopwatchButton from '../StopwatchButton/StopWatchButton';

const HomeView = () => {
  const [state, setState] = useState({
    time: 0,
    paused: false,
  });

  const handleAppStateChange = async (nextAppState) => {
    console.log(nextAppState);
    const now = new Date().getTime();
    const { time } = state;
    const readTime = await AsyncStorage.getItem('@time');
    const readtAppStateChangedTimestamp = await AsyncStorage.getItem('@appStateChangedTimestamp');

    const timeDifference = now - parseInt(readtAppStateChangedTimestamp, 10);
    const newTime = parseInt(readTime, 10) + timeDifference;

    if (nextAppState === 'active') {
      setState((prevState) => ({ ...prevState, time: newTime }));
    }

    await AsyncStorage.setItem('@time', time);
    await AsyncStorage.setItem('@appStateChangedTimestamp', now);
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

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

  let intervalId;

  const handleAppStateChange = async (nextAppState) => {
    const now = new Date().getTime();
    const { time, paused } = state;
    const readTime = await AsyncStorage.getItem('@time');
    const readtAppStateChangedTimestamp = await AsyncStorage.getItem('@appStateChangedTimestamp');

    const timeDifference = now - parseInt(readtAppStateChangedTimestamp, 10);
    const newTime = parseInt(readTime, 10) + timeDifference;

    if (nextAppState === 'active') {
      const isPaused = JSON.parse(await AsyncStorage.getItem('@isPaused'));
      console.log(isPaused);
      if (!isPaused) {
        setState((prevState) => ({ ...prevState, time: newTime }));
        startTimer();
      } else {
        await AsyncStorage.setItem('@isPaused', JSON.stringify(paused));
        await AsyncStorage.setItem('@time', time.toString());
        await AsyncStorage.setItem('@appStateChangedTimestamp', now.toString());
      }
    }
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, [handleAppStateChange]);

  const startTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
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

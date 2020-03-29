import React, { useState, useEffect, useRef } from 'react';
import { View, Text, AppState, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import i18n from '../../i18n/en';
import styles from './HomeViewStyles';
import StopwatchButton from '../StopwatchButton/StopWatchButton';

const HomeView = ({ navigation }) => {
  const [state, setState] = useState({
    time: 0,
    paused: false,
  });

  let intervalId = useRef(null);

  const handleAppStateChange = async (nextAppState) => {
    const now = new Date().getTime();
    const { time, paused } = state;
    const readTime = await AsyncStorage.getItem('@time');
    const readtAppStateChangedTimestamp = await AsyncStorage.getItem('@appStateChangedTimestamp');

    const timeDifference = now - parseInt(readtAppStateChangedTimestamp, 10);
    const newTime = parseInt(readTime, 10) + timeDifference;

    if (nextAppState === 'active') {
      const isPaused = JSON.parse(await AsyncStorage.getItem('@isPaused'));
      if (!isPaused) {
        setState((prevState) => ({ ...prevState, time: newTime }));
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
  }, []);

  const startTimer = () => {
    clearTimer();

    intervalId.current = setInterval(() => {
      setState((prevState) => ({ ...prevState, time: prevState.paused ? prevState.time : prevState.time + 1000 }));
    }, 1000);
  };

  const pauseTimer = () => {
    clearTimer();

    setState((prevState) => ({ ...prevState, paused: !prevState.paused }));
  };

  const reset = () => {
    clearTimer();
    setState((prevState) => ({ ...prevState, time: 0, paused: false }));
  };

  const clearTimer = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const finish = () => {
    reset();
    navigation.navigate('Finish');
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={styles.buttonView}>
        <StopwatchButton
          time={state.time}
          paused={state.paused}
          onStart={startTimer}
          onPause={pauseTimer}
        />
        {
          state.time > 0 && (
            <TouchableOpacity onPress={finish}>
              <Text style={styles.finishButton}>{i18n.HOME.FINISH}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
};

export default HomeView;

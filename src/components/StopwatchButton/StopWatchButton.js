import React from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import moment from 'moment';

import i18n from '../../i18n/en';
import styles from './StopwatchButtonStyles';

const StopwatchButton = ({ time, paused, onStart, onPause }) => {
  const timerOpacity = new Animated.Value(1);
  const BLINK_DELAY = 1500;
  const blinker = (toValue) => {
    if (paused) {
      Animated.timing(timerOpacity, {
        toValue,
        duration: BLINK_DELAY,
      }).start(() => {
        blinker(toValue === 1 ? 0 : 1);
      });
    } else {
      Animated.timing(timerOpacity, {
        toValue: 1,
        duration: BLINK_DELAY,
      }).start();
    }
  };

  blinker(0);

  if (time > 0) {
    return (
      <TouchableOpacity onPress={onPause} style={styles.mainActionButton}>
        <Animated.View style={[styles.mainActionButton, { opacity: timerOpacity }]}>
          <Text style={styles.mainActionButtonText}>{moment.utc(time).format(i18n.TIME_FORMAT)}</Text>
          <Text style={[styles.mainActionButtonText, styles.mainActionButtonPauseText]}>{paused ? i18n.HOME.PAUSED : i18n.HOME.PAUSE}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onStart} style={styles.mainActionButton}>
      <Text style={styles.mainActionButtonText}>{i18n.HOME.START}</Text>
    </TouchableOpacity>
  );
};

export default StopwatchButton;

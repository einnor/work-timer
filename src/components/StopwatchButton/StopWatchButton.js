import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import i18n from '../../i18n/en';
import styles from './StopwatchButtonStyles';

const StopwatchButton = ({ time, onStart, onPause }) => {

  if (time > 0) {
    return (
      <TouchableOpacity onPress={onPause} style={styles.mainActionButton}>
        <Text style={styles.mainActionButtonText}>{moment.utc(time).format(i18n.TIME_FORMAT)}</Text>
        <Text style={[styles.mainActionButtonText, styles.mainActionButtonPauseText]}>{i18n.HOME.PAUSE}</Text>
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

import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './ActionButtonStyles';

const ActionButton = ({ label, onPress, textColor, backgroundColor }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.touchableStyle, { backgroundColor }]}
		>
			<Text style={[styles.captionStyle, { color: textColor }]}>{label}</Text>
		</TouchableOpacity>
	);
};

export default ActionButton;

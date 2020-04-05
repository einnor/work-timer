import React from 'react';
import { TouchableOpacity } from 'react-native';

const ActionButton = ({ label, onPress, textColor, backgroundColor }) => {
    return (
        <TouchableOpacity
          onPress={onPress}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

export default ActionButton;

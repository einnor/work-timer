import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

const HomeView = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Good Morning!</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => {}}>
          <Text>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;

import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: 'white'
  }
});

const LibraryScreen = () => (
  <View style={styles.root}>
    <Text style={styles.text}>Library Screen</Text>
  </View>
);

export default LibraryScreen;

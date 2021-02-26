import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default() =>
{
  const [pressCount, setPassCount] = useState(0);
  return(
    <View style ={{alignItems: "center", marginTop: 20}}>
      <Text>You're pressed the button: {pressCount} time(s)</Text>
      <Button
        title={'Pressed ${pressCount} time(s)'}
        onPress={() => setPassCount(pressCount + 1)}
      />
    </View>
  );
};
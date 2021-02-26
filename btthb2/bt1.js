import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => 
{
  return (
    <View style={MyStyle.ViewStyle}>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  );
}
export default App;

<View style = {
  {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  }
}>
  <Text style = {{color: '#fff'}}>Hello world</Text>
</View>

var MyStyle = StyleSheet.create(
  {
    ViewStyle: {
      width: 100,
      height: 100,
      backgroundColor: 'aqua',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextStyle:
    {
      color: '#000'
    }
  }
)
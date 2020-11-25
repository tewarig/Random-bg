import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [randomColor, setRandomColor] = useState("rgb(0,0,0)");
  return (
    <>
    <View style={[styles.container,{backgroundColor: randomColor} ]}>
      <Text style={styles.text}>Tap Me!</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    backgroundColor:"#0078d7",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,

  }
});

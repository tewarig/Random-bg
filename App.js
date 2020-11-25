import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [randomColor, setRandomColor] = useState("rgb(0,0,0)");
  const changeBackground = () => {
   let color = "rgb("+
   Math.floor(Math.random() * 256) + 
   " , " +
   Math.floor(Math.random() * 256)+
   ","+ Math.floor(Math.random() * 256) +")";
   setRandomColor(color);
  };
  return (
    <>
    <View style={[styles.container,{backgroundColor: randomColor} ]}>
      <TouchableOpacity onPress={changeBackground}>
  <Text style={styles.text}>{randomColor}</Text>
      </TouchableOpacity>
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

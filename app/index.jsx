import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Display from '../components/display.jsx';


const Home = () => {
 
  return (
    <View style = {styles.CONTAINER}>
      <Display />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  CONTAINER: {
    backgroundColor:'#FAE3AC',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
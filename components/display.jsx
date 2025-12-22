import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

const Display = () => {

  const [number, onChangeNumber] = useState('');
  return (
    <View style={styles.DISPLAY_CONTAINER}>
      <View>
        <TextInput style = {styles.DISPLAY_INPUT_FIELD} onChangeText={onChangeNumber} value={number} placeholder='Enter a number' />
      </View>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  DISPLAY_CONTAINER: {
    width: '95%',
    height: 200,
    backgroundColor: '#D12128',
    borderRadius: 16,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,   
  },
  DISPLAY_INPUT_FIELD: {
    width: '90%',
    height: '90%',
    backgroundColor: '#FFFFFF',
  }
});

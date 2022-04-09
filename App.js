import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [numeros, setNumeros] = useState([]);
  
  const sortearNumeros = () => {
    const aux = [];
  
    while(aux.length < 6) {
      const generatedNumber = Math.floor(Math.random() * 60) + 1;
      if (!aux.includes(generatedNumber)) {
        aux.push(generatedNumber);
      }
    }
  
    setNumeros(aux);
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: '10px'}}>{numeros.join(', ')}</Text>
      <Button title="Sortear" onPress={() => sortearNumeros()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
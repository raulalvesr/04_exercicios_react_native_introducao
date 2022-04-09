import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [numeros, setNumeros] = useState([]);
  const sortearNumeros = () => {
    const aux = [];

    while(true) {
      if (aux.length >= 6) {
        setNumeros(aux);
        break;
      }
      
      const generatedNumber = Math.floor(Math.random() * 60) + 1;
      if (aux.includes(generatedNumber)) {
        continue;
      }
  
      aux.push(generatedNumber);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>{numeros.map(x => <Text>{x} </Text>)}</View>
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
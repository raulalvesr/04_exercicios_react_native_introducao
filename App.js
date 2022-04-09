import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [numeros, setNumeros] = useState([]);

  // setNumeros = () => {
  //   while(true) {
  //     if (numeros.lengt >= 6) {
  //       break;
  //     }
      
  //     const generatedNumber = Math.random() * (60 - 1) + 1;
  //     if (!numeros.includes(generatedNumber)) {
  //       continue;
  //     }

  //     numeros.push(generatedNumber);
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text>{numeros}</Text>
      {/* <Button title="Sortear" onPress={() => setNumeros()}/> */}
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

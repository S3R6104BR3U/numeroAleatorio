import React, {useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity, TouchableOpacityBase, StyleSheet } from "react-native";

const App = ()=> {

  const [numero, setNumero] = useState(10);

  function handleNumero(){

    const novo_numero = Math.floor(Math.random() * 100);

    setNumero(novo_numero);
  }

  return(
    
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.bnt}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
      </SafeAreaView>
  
  )
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  numero: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  bnt: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10

  }


})






/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Numero Aleatorio</Text>
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
}); */
     
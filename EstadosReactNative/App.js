import { StyleSheet, Text, View, TextInput,  Button } from 'react-native';
import {useState, useEffect} from "react"

export default function App() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  

  useEffect(()=>{
    console.log('Alterei a Idade')
  }, [idade]) 

  useEffect(()=>{
    console.log('Alterei o Nome')    
  }, [nome]) 

  return (
    <View style={styles.container}>
      {nome ?
        <Text style={styles.text}>Olá, {nome}!</Text>
        : null
      }
      <TextInput 
        style={styles.input}
        value={nome}
        onChangeText={(texto) => setNome(texto) }
      />
      <TextInput 
        style={styles.input}
        value={idade}
        onChangeText={(tarzan) => setIdade(tarzan) }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 32,
  },
  input : {
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    height: 36,
  }
});

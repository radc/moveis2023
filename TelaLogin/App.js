import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}> 

      <View style={styles.superior}>
        <Text style={styles.tituloapp}>Meu APP</Text>     
      </View>

      <View style={styles.inferior}>
        <Botao texto="Entrar"/>
        <Botao texto="Cadastrar"/>
      </View>
      
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

  tituloapp : {
    fontSize: 32,
    color: 'purple',
    fontWeight: 'bold'
  },
  superior : {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  inferior:{
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    
    paddingBottom: 40,
    
  }
});

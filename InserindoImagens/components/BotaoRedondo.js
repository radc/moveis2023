import { 
  TouchableOpacity ,
  StyleSheet,
  Text
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons"



export default function BotaoRedondo(props){


  const meuicone = props.iconelindo || 'timer'  

  return (
    <TouchableOpacity onPress={() => alert('Ola')} style={styles.container}>
      <Ionicons name={meuicone} size={24}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 18,
    elevation: 5,

    alignItems: 'center',
    justifyContent: 'center'
  },
  texto : {
    fontSize: 24
  }
})
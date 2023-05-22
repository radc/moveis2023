import {
  View,
  Image,
  StyleSheet
} from "react-native"
import BotaoRedondo from "../components/BotaoRedondo"

export default function Splash(){

  const imagem = require('../assets/picapau.png')

  return (
    <View style={styles.container}>
      <View style={styles.viewInterna}>
        <Image source={imagem} style={styles.imagem}/>
        <View style={styles.viewBotoes}>
          <BotaoRedondo iconelindo="trash"/>
          <BotaoRedondo iconelindo="add"/>
        </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    width: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewInterna : {
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 180,
    height: 180,
  },
  viewBotoes: {
    paddingVertical: 10,   
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',

    //backgroundColor: 'red'
  }
})
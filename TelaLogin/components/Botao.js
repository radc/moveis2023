import {
  TouchableOpacity as TO,
  StyleSheet,
  Text

} from "react-native";


export default function Botao(props){

  const texto = props.texto

  return (
    <TO style={estilos.container}>
      <Text style={estilos.texto}>{texto}</Text>
    </TO>
  )
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 35,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10
  },
  texto : {
    fontSize: 18,
    color: 'white',
  }
})

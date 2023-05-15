
import {View, Text, StyleSheet, 
    TouchableOpacity as TO
} from "react-native"

export default function MeuBotao(props){
    console.log(props);
    const titulo = props.texto || "OK";
    

    return(
        <TO style={estilos.container}>
            <Text style={estilos.texto}>{titulo}</Text>
        </TO>
    )

}

const estilos = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        backgroundColor: "#007",
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
});
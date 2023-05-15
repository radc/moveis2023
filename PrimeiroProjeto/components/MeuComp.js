import { StyleSheet, Text, View, Button, TextInput } from "react-native"

export default function MeuComp(){

    return(
        <View style={estilos.caixinha}>
            <Text>Meu Componente Parte 1</Text>
            <Text>Meu Componente Parte 2</Text>
            <Button onPress={botaoPressionado} color="red" title="Clique aqui"/>
            <TextInput placeholder="Digite seu nome"/>
        </View>
    )
}

const botaoPressionado = () => {
    alert('Botão pressionado')
}

const estilos = StyleSheet.create({
    caixinha : {
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    
})
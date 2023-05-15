import React from "react"
import { View, StyleSheet, Text } from "react-native"
import MeuTexto from "./components/MeuTexto"
import MeuComp from "./components/MeuComp"
import MeuBotao from "./components/MeuBotao"

export default function App() {
  
  const meuNome = 'Ruhan'

  return (
      <View style={estilos.tela}>
        {/*
        <Text style={estilos.texto}>Olá, eu sou o Fulano de Tal</Text>
        <MeuTexto />
        <MeuComp />
        <MeuBotao />
        */}
        <View style={{width: '100%', backgroundColor: 'red', flex: 1}} />
        <View style={{width: '100%',backgroundColor: 'orange', flex: 1}} />
        <View style={{
          width: '100%',backgroundColor: 'purple', flex: 2,
          justifyContent: 'flex-end',  alignItems: 'center',
          flexDirection: 'row', flexWrap: 'wrap'
        }} > 
          <MeuBotao/>
          <MeuBotao/>
          <MeuBotao/>
          <MeuBotao/>
          <MeuBotao/>
          <MeuBotao/>
        </View>
        

      </View>
  )
}

const pessoa = {
  nome: 'Ruhan',
  idade: 20,
  cpf: '123.456.789-00',
  endereco: {
    rua: 'Rua 1',
    numero: 123,
  }
}

const estilos =  StyleSheet.create({
  tela : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'red',
    fontSize: 20
  }
})
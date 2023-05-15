import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MeuTexto() {

    return (
        <Text style={estilos.texto}>Ruhan</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: 'blue',
        fontSize: 32,
        fontWeight: 'bold',
    }
})
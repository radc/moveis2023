import { View, StyleSheet } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "expo-router";
import Spot from "../components/Spot";
import Board from "../components/Board";

export default function App() {

    const nav = useNavigation();
    

    return (
        <View style={styles.container}>

            <Board />

            <Button title="Click me" 
                onPress={
                    () => nav.push('pagina2')
                } />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    }
})
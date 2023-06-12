import { View, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function App() {


    return (
        <View style={styles.container}>
            <Button title="Click me" 
                onPress={
                    () => alert('Hello World')
                } />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    }
})
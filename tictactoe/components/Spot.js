import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Spot(props) {

    const player = props.player;
    let texto = null;

    if(player == 1) {
        texto = <Text style={{fontSize: 32}}>X</Text>
    }
    if(player == 2) {
        texto = <Text style={{fontSize: 32}}>O</Text>
    }

    return (
        <TouchableOpacity style={styles.container}>
            {texto}
        </TouchableOpacity>        
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 80,
        height: 80,
    }
})


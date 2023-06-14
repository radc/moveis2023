import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Spot(props) {

    const player = props.player;
    let texto = null;

    if(player == 1) {
        texto = <Text style={{fontSize: 40}}>X</Text>
    }

    if(player == 2) {
        texto = <Text style={{fontSize: 40}}>O</Text>
    }

    const estilosSpot = [styles.container]
    if(props.c == 0){
        estilosSpot.push({borderLeftWidth: 0})
    }
    if(props.c == 2){
        estilosSpot.push({borderRightWidth: 0})
    }
    if(props.l == 0){
        estilosSpot.push({borderTopWidth: 0})
    }
    if(props.l == 2){
        estilosSpot.push({borderBottomWidth: 0})
    }

    if(props.hasWinner){
        estilosSpot.push({backgroundColor: '#22ff77'})
    }
    if(props.draw){
        estilosSpot.push({backgroundColor: '#ffcc00'})
    }

    return (
        <TouchableOpacity 
            style={estilosSpot}
            onPress={
               () => props.pressionado(props.l, props.c) 
            }
        >
            {texto}
        </TouchableOpacity>        
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 100,
        height: 100,

        borderWidth: 5,
        borderColor: 'black',
    }
})


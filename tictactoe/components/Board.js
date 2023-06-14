import {View, StyleSheet} from 'react-native';
import Spot from './Spot';
import {useState} from 'react';

export default function Board(props){

    const [gameBoard, setGameBoard] = useState([[0,0,0],[0,0,0],[0,0,0]]);
    const [player, setPlayer] = useState(1);

    const botaoPressionado = (l,c) => {
        let tabuleiro = [...gameBoard];
        tabuleiro[l][c] = player;
        setPlayer(player == 1 ? 2 : 1);
        setGameBoard(tabuleiro);
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Spot l={0} c={0} player={gameBoard[0][0]} pressionado={botaoPressionado}/>
                <Spot l={0} c={1} player={gameBoard[0][1]} pressionado={botaoPressionado}/>
                <Spot l={0} c={2} player={gameBoard[0][2]} pressionado={botaoPressionado}/>                
            </View>
            <View style={styles.row}>
                <Spot l={1} c={0} player={gameBoard[1][0]} pressionado={botaoPressionado}/>
                <Spot l={1} c={1} player={gameBoard[1][1]} pressionado={botaoPressionado}/>
                <Spot l={1} c={2} player={gameBoard[1][2]} pressionado={botaoPressionado}/> 
            </View>
            <View style={styles.row}>
                <Spot l={2} c={0} player={gameBoard[2][0]} pressionado={botaoPressionado}/>
                <Spot l={2} c={1} player={gameBoard[2][1]} pressionado={botaoPressionado}/>
                <Spot l={2} c={2} player={gameBoard[2][2]} pressionado={botaoPressionado}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  

    container: {
        //backgroundColor: 'cyan',

    },

    row : {
        flexDirection: 'row',
    }
})
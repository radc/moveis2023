import {View, StyleSheet, Button} from 'react-native';
import Spot from './Spot';
import {useState, useEffect} from 'react';

export default function Board(props){

    const [gameBoard, setGameBoard] = useState([[0,0,0],[0,0,0],[0,0,0]]);
    const [player, setPlayer] = useState(1);
    const [playing, setPlaying] = useState(true);

    const [hasWinner, setHasWinner] = useState(false);
    const [draw, setDraw] = useState(false);


    const resetGame = () => {
        setGameBoard([[0,0,0],[0,0,0],[0,0,0]]);
        setPlayer(1);
        setHasWinner(false);
        setPlaying(true);
        setDraw(false);
    }


    useEffect(() => {
        if(verificaGanhador()){
            setPlaying(false);
            setHasWinner(true);
        }else if(verificaEmpate()){
            setDraw(true);
        }
    }, [gameBoard]);

    const botaoPressionado = (l,c) => {
        if(!playing) return;

        let tabuleiro = [...gameBoard];

        if(tabuleiro[l][c] == 0){
            tabuleiro[l][c] = player;
            setPlayer(player == 1 ? 2 : 1);
            setGameBoard(tabuleiro);            
        }        
    }

    const verificaGanhador = () => {
        // Verifica linhas
        for(let i = 0; i < 3; i++){
            if(gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == 
                gameBoard[i][2] && gameBoard[i][0] != 0){
                return gameBoard[i][0];
            }
        }
        // Verifica colunas
        for(let i = 0; i < 3; i++){
            if(gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == 
                gameBoard[2][i] && gameBoard[0][i] != 0){
                return gameBoard[0][i];
            }
        }
        // Verifica diagonais
        if(gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] ==
            gameBoard[2][2] && gameBoard[0][0] != 0){
            return gameBoard[0][0];
        }
        if(gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] ==
            gameBoard[2][0] && gameBoard[0][2] != 0){
            return gameBoard[0][2];
        }
        return 0;
    }

    const verificaEmpate = () => {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(gameBoard[i][j] == 0){
                    return false;
                }
            }
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Spot hasWinner={hasWinner} draw={draw} l={0} c={0} player={gameBoard[0][0]} pressionado={botaoPressionado}/>
                <Spot hasWinner={hasWinner} draw={draw} l={0} c={1} player={gameBoard[0][1]} pressionado={botaoPressionado}/>
                <Spot hasWinner={hasWinner} draw={draw} l={0} c={2} player={gameBoard[0][2]} pressionado={botaoPressionado}/>                
            </View>
            <View style={styles.row}>
                <Spot hasWinner={hasWinner} draw={draw} l={1} c={0} player={gameBoard[1][0]} pressionado={botaoPressionado}/>
                <Spot hasWinner={hasWinner} draw={draw} l={1} c={1} player={gameBoard[1][1]} pressionado={botaoPressionado}/>
                <Spot hasWinner={hasWinner} draw={draw} l={1} c={2} player={gameBoard[1][2]} pressionado={botaoPressionado}/> 
            </View>
            <View style={styles.row}>
                <Spot hasWinner={hasWinner} draw={draw} l={2} c={0} player={gameBoard[2][0]} pressionado={botaoPressionado}/>
                <Spot hasWinner={hasWinner} draw={draw} l={2} c={1} player={gameBoard[2][1]} pressionado={botaoPressionado}/>
                <Spot hasWinner={hasWinner} draw={draw} l={2} c={2} player={gameBoard[2][2]} pressionado={botaoPressionado}/> 
            </View>
            <Button title="RESET" 
                onPress={
                    () => resetGame()
                } />
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
import React, {Component} from 'react';
import {
    AppRegistry, StyleSheet, Text, View, Button
} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class jokenpo extends Component {

    constructor(props) {
        super(props);

        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' }
    }

    jokenpo(escolhaUsuario) {
        //gera numero aleatorio (0 - 2) gerando a escolha do computador
        const numAleatorio = Math.floor(Math.random() * 3);
        let escolhaComputador = '';
        switch (numAleatorio) {
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
            default: escolhaComputador = '';
        }

        //calculando o resultado do jokenpo
        let resultado = '';
        if (escolhaComputador === 'pedra') {
            if (escolhaUsuario === 'pedra') {
                resultado = 'Empate';
            }
            if (escolhaUsuario === 'papel') {
                resultado = 'Você Ganhou.'
            }
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você Perdeu.'
            }
        } else if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
            }
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você Ganhou.'
            }
            if (escolhaUsuario === 'pedra') {
                resultado = 'Você Perdeu.'
            }
        } else if (escolhaComputador === 'tesoura') {
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Empate';
            }
            if (escolhaUsuario === 'pedra') {
                resultado = 'Você Ganhou.'
            }
            if (escolhaUsuario === 'papel') {
                resultado = 'Você Perdeu.'
            }
        }


        //altera o valor das variaveis state escolhaUsuario e escolhaComputador
        this.setState( {escolhaUsuario: escolhaUsuario,
                        escolhaComputador: escolhaComputador,
                        resultado: resultado
                    } ); //disparar a execução da função 
    }

    //render é uma função para utilizar os components props
    render() {
        return(
            <View>

                <Topo />
            
                <View style={styles.painelAcoes}>
                    <View style={ styles.btnEscolha }>
                        <Button title="PEDRA" onPress={() => { this.jokenpo('pedra') } }/>
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="PAPEL" onPress={() => { this.jokenpo('papel') } }/>
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title="TESOURA" onPress={() => { this.jokenpo('tesoura') } }/>
                    </View>
                </View>

                <View style={styles.palco}>
                    <Text style={ styles.txtResultado }>{ this.state.resultado }</Text>

                    <Icone escolha={ this.state.escolhaComputador } jogador='Computador' />
                    <Icone escolha={ this.state.escolhaUsuario } jogador='Você' />

                </View>
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create( {
    btnEscolha: {
        width: 90
    },
    painelAcoes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco:{
        alignItems: 'center'
    },
    txtResultado:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }
} );

AppRegistry.registerComponent('jokenpo', () => jokenpo); //função de registro de componente

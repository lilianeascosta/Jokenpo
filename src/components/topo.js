import React, {Component} from 'react';
import{Image, View} from 'react-native';

const imagem = require('../../imgs/jokenpo.png'); //prática do ESLint para uso de imagem

class Topo extends Component{
    render() {
        return(
            <View>
                <Image style={{resizeMode: 'cover', marginLeft: 8}} //deixa a imagem de fora a fora na tela
                source={imagem} />
            </View>
        );
    }
}

export default Topo;

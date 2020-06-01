import React from 'react';
import { View, Text, TouchableOpacity, Platform, TextInput, StyleSheet } from 'react-native';
import { stylesDefault } from '../asstes/styles/default'

export default class IMC extends React.Component {
    state = {
        altura: null,
        peso: null
    }

    

    render() {
        return(

            <View>
                <Text>{this.state.altura && this.state.peso ? (this.state.peso / (this.state.altura * this.state.altura)) : 0}</Text>
                <TextInput placeholder={'Altura'} value={this.state.altura} onChangeText={(altura) => this.setState({altura})}/>
                <TextInput placeholder={'Peso'} value={this.state.peso} onChangeText={(peso) => this.setState({peso})}/>

                <View style={{ width:100, height: 100, backgroundColor: '#000' }}></View>
                <View style={styles.quadrado_azul}></View>
                <View style={[stylesDefault.quadrado_amarelo]}></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    quadrado_azul: {
        width:100, 
        height: 100, 
        backgroundColor: '#55f'
    }
});
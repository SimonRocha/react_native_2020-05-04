import React from 'react';
import { View } from 'react-native'
import { ButtonGroup, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TelaA extends React.Component {
    state = {
        index: 1
    }

    render() {
        return(
            <View>
            <ButtonGroup
                onPress={(index) => this.setState({index})}
                selectedIndex={this.state.index}
                buttons={['Botao1','Botao2','Botao3']}
                containerStyle={{height: 100}}
            />
            {
                this.state.index == 1 ?
                <Text>Tela1</Text>
            :
                this.state.index == 2 ?
                <Text>Tela2</Text>
            :
                <Text>Tela3</Text>
            }
            </View>
        )
    }
}
import React from 'react';
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TelaC extends React.Component {
    render() {
        return(
            <Button
                buttonStyle={{ backgroundColor: '#000' }}
                icon={ <Icon name="arrow-right" size={15} color="white"/> }
                title="Tela A"
                onPress={() => this.props.navigation.navigate('TelaA')}
            />
        )
    }
}
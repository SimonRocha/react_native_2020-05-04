import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import CardEx5 from './CardEx5'

export default class ListCardEx5 extends React.Component {
    render() {
        return(
            <View>
                {this.props.data ? 
                    this.props.data.map(curso => <CardEx5 {...curso}/>) 
                :null}
            </View>
        )
    }
}
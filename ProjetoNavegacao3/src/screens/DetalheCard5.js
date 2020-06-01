import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DetalheCard5 extends React.Component {

    render() {
        return (
            <View>
                <Text>{this.props.route.params.time}</Text>
                <Text>{this.props.route.params.title}</Text>
                <Text>{this.props.route.params.user_name}</Text>
            </View>
        )
    }
}
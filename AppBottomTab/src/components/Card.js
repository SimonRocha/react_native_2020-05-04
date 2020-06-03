import React from 'react';
import { View, Text, TouchableOpacity, Platform, TextInput } from 'react-native';

export default class Card extends React.Component {
    state = {
        description: 'Description asdas asdasd escription asdas asdasdescription asdas asdasdescription asdas asdasd.',
        title: 'Title',
        texto: ''
    }



    render() {
        return(
            <TouchableOpacity onPress={() => alert(this.state.texto)}>
            <View style={{
                marginBottom: 20, 
                borderRadius: 10, 
                width: 250, 
                borderWidth: 1, 
                borderColor: '#000',
                ...Platform.select({
                    ios: {
                      shadowColor: '#007aff',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                    },
                    android: {
                      elevation: 4, 
                    },
                  }),
                }}>
                <View style={{borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200, width: 247, backgroundColor: '#4ff'}}></View>

                <View style={{padding: 10}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        {this.props.title ? this.props.title : this.state.title}
                    </Text>

                    <Text style={{fontSize: 16, marginTop: 20 }}>
                        {this.props.description ? this.props.description : this.state.description}
                    </Text>

                    <Text style={{marginTop: 40}}>
                        Twitter
                    </Text>
                </View>

                <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
                value={this.state.texto} onChangeText={(texto) => this.setState({texto})}
                />
            </View>
            </TouchableOpacity>
        );
    }
}
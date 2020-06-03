import React from 'react';
import { View, Text, FlatList, TabBarIOS } from 'react-native';

export default class ListExemplo extends React.Component {
    state = {
        itens: [
            {
                titulo: 'T1',
                id: 1
            },
            {
                titulo: 'T2',
                id: 2
            },
            {
                titulo: 'T3',
                id: 3
            },
            {
                titulo: 'T4 ',
                id: 4
            },
            {
                titulo: 'T5 ',
                id: 5
            },
            {
                titulo: 'T6 ',
                id: 6
            },
            {
                titulo: 'T7 ',
                id: 7
            },
            {
                titulo: 'T8 ',
                id: 8
            },

        ]
    }

    itemList = ({item}) => {
        return(
            <View style={{flex: 1, margin: 10, padding: 10, paddingTop: 60, paddingBottom: 60, backgroundColor: '#f4f'}}>
                <Text>{item.titulo}</Text>
            </View>
        )
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.itens} 
                    keyExtractor={item => item.id}
                    renderItem={this.itemList}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => alert('10')}
                />
            </View>
        );
    }
}
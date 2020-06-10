import React from 'react';
import { View } from 'react-native'
import { Card, Image, Text  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


const users = [
    {
       name: 'brynn1',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn2',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
   ]

export default class TelaB extends React.Component {
    render() {
        return(
            <Card title="CARD WITH DIVIDER">
            {
                users.map((u, i) => {
                return (
                    <View key={i}>
                        <Image
                            style={{height: 30, width: 30}}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text>{u.name}</Text>
                    </View>
                );
                })
            }
            </Card>
        )
    }
}
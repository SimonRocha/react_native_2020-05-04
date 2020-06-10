import React from 'react';
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TelaA extends React.Component {
    render() {
        return(
            <View>
            <Button
                buttonStyle={{
                    backgroundColor: '#000',
                }}
                containerStyle={{
                    width: 100
                }}
                title="Solid Button"
            />
            <Button
                buttonStyle={{
                    backgroundColor: '#000',
                }}
                containerStyle={{
                    width: 100
                }}
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title="Button with icon component"
                />
            </View>

        )
    }
}
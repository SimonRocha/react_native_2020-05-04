import React from 'react';
import { View } from 'react-native'
import { PricingCard } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TelaC extends React.Component {
    render() {
        return(
            <PricingCard
                color="#4f9deb"
                title="Free"
                price="$0"
                info={['1 User', 'Basic Support', 'All Core Features']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff', onPress: () => alert('1') }}
            >
            </PricingCard>
        )
    }
}
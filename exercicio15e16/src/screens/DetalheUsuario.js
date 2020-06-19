import React from 'react';
import { View } from 'react-native'
import { Card, Text, Image } from 'react-native-elements'
import { getUser } from '../actions/user';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetalheUsuario extends React.Component {
    componentDidMount() {
        const user_id = this.props.route.params.user_id;
        this.props.actions.getUser(user_id)
    }

    render() {
        const u = this.props.user_profile ? this.props.user_profile : {}
        debugger
        return (
            <Card title={u.first_name}>
                <View style={{flexDirection: "row"}}>
                    <Image
                        style={{width: 100, height: 100, borderRadius: 30}}
                        resizeMode="cover"
                        source={{ uri: u.avatar }}
                    />  
                    <View style={{marginLeft: 20, paddingTop: 10}}>
                        <View style={{flexDirection: "row"}}>   
                            <Text>Sobrenome: </Text>
                            <Text>{u.last_name}</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>   
                            <Text>Email: </Text>
                            <Text>{u.email}</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>   
                            <Text>Código: </Text>
                            <Text>{u.id}</Text>
                        </View>
                    </View>
                </View>
            </Card> 
        )
    }
}

const mapStateToProps = state => ({
    user_profile: state.user_state.user_profile,
});

const ActionCreators = Object.assign(
    {},
    {getUser},
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheUsuario)
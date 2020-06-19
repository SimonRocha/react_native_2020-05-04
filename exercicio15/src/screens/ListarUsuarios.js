import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Text, Image } from 'react-native-elements'
import { listUsers } from '../actions/user';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ListarUsuarios extends React.Component {
    componentDidMount() {
        this.props.actions.listUsers();
    }


    render() {
        return(
            <ScrollView>
            <View>
                {this.props.users ? this.props.users.map(u => {
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Detalhe do usuário", { user_id: u.id})}>
                        <Card   title={u.first_name}>
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
                        </TouchableOpacity>
                    )
                    })
                :null}
            </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    users: state.user_state.users,
});

const ActionCreators = Object.assign(
    {},
    {listUsers},
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListarUsuarios)
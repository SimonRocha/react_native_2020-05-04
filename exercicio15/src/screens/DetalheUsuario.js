import React from 'react';
import { View, ScrollView } from 'react-native'
import { Card, Text, Image } from 'react-native-elements'
import { getUser } from '../actions/user';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetalheUsuario extends React.Component {
    componentDidMount() {
        debugger;
        const user_id = this.props.route.params.user_id;
        debugger;
        this.props.actions.getUser(user_id)
    }

    render() {
        return (
            <View></View>
        )
    }
}

const mapStateToProps = state => ({
    user_prifile: state.user_state.user_prifile,
});

const ActionCreators = Object.assign(
    {},
    {getUser},
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalheUsuario)
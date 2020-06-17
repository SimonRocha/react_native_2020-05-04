import React from 'react';
import { View } from 'react-native'
import { ButtonGroup, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { listUsers } from '../actions/user';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class ListarUsuarios extends React.Component {
    state = {
        index: 1
    }
    render() {
        return(
            <View>
            <ButtonGroup
                onPress={(index) => this.setState({index})}
                selectedIndex={this.state.index}
                buttons={['Botao1','Botao2','Botao3']}
                containerStyle={{height: 100}}
            />
          
            </View>
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
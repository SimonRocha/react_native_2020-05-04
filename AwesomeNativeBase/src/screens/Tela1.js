import React from 'react';

import { Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Title, FooterTab, StyleProvider, Root, Spinner } from 'native-base'
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/variables-1';


export default class Tela1 extends React.Component {
    render() {
        return(
            <StyleProvider style={getTheme(variables)}>
            <Container>
            <Header>
                <Left>
                <Button onPress={() => alert('oi')} transparent>
                    <Icon name='menu' />
                </Button>
                </Left>

                <Body>
                <Title>Tela 1</Title>
                </Body>

                <Right/>
            </Header>

            <Content padder>
                <Text>Texto qualquer</Text>
                <Spinner />
                <Spinner color='red' />
                <Spinner color='green' />
                <Spinner color='blue' />
            </Content>

            <Footer>
                <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('Tela1')} full>
                    <Text>Tela 1</Text>
                </Button>
                </FooterTab>

                <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('Tela2')} full>
                    <Text>Tela 2</Text>
                </Button>
                </FooterTab>

                <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('Tela3')} full>
                    <Text>Tela 3</Text>
                </Button>
                </FooterTab>
            </Footer>
            </Container>
            </StyleProvider>
        )
    }
}
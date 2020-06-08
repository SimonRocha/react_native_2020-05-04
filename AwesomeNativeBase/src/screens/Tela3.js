import React from 'react';

import { Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Title, FooterTab, StyleProvider, Root } from 'native-base'

export default class Tela3 extends React.Component {
    render() {
        return(
            <Container>
            <Header>
                <Left>
                <Button onPress={() => alert('oi')} transparent>
                    <Icon name='menu' />
                </Button>
                </Left>

                <Body>
                <Title>Header</Title>
                </Body>

                <Right/>
            </Header>

            <Content padder>
                <Text>Texto qualquer</Text>
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
        )
    }
}
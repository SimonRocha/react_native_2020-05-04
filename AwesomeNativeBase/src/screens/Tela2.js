import React from 'react';

import { ScrollView } from 'react-native'
import { Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Title, FooterTab, StyleProvider, Root, Accordion } from 'native-base'
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/commonColor';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" },

  ];

export default class Tela2 extends React.Component {
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
                <Title>Tela 2</Title>
                </Body>

                <Right/>
            </Header>

            <Content padder>
                <Text>Texto qualquer</Text>
                <Accordion dataArray={dataArray} expanded={0}/>
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
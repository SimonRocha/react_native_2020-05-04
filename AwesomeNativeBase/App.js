/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Title, FooterTab, StyleProvider, Root } from 'native-base'
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/variables-1';

const App: () => React$Node = () => {
  return (
    <StyleProvider style={getTheme(material)}>
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
          <Button full>
            <Text>Footer 2</Text>
          </Button>
        </FooterTab>

        <FooterTab>
          <Button full>
            <Text>Footer 3</Text>
          </Button>
        </FooterTab>

        <FooterTab>
          <Button full>
            <Text>Footer 4</Text>
          </Button>
        </FooterTab>

        <FooterTab>
          <Button full>
            <Text>Footer 5</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    </StyleProvider>
  );
};


export default App;

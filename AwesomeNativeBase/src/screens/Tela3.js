import React from 'react';

import { Image } from 'react-native'
import { DeckSwiper, View, Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Title, FooterTab, StyleProvider, Root, Card, CardItem, Thumbnail } from 'native-base'

const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../asstes/images/cat.png'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../asstes/images/cat.png'),
      },
  ];


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
                <Title>Tela 3</Title>
                </Body>

                <Right/>
            </Header>

            <View>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={item.image} />
                                <Body>
                                    <Text>{item.text}</Text>
                                    <Text note>NativeBase</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        
                        <CardItem cardBody>
                            <Image style={{ height: 300, flex: 1 }} source={item.image} />
                        </CardItem>
                        
                        <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.name}</Text>
                        </CardItem>
                    </Card>
                    }
                />
            </View>

            
            </Container>
        )
    }
}
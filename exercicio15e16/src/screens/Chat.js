import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          image: 'https://s2.glbimg.com/hzJUjecqvH_F_eIdyaUvdEZlZ9k=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/6/d7OX4gSbmIPOBJA5vYpw/cat.jpg',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://s2.glbimg.com/hzJUjecqvH_F_eIdyaUvdEZlZ9k=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/6/d7OX4gSbmIPOBJA5vYpw/cat.jpg',
          },
        },
        {
            _id: 2,
            image: 'https://s2.glbimg.com/hzJUjecqvH_F_eIdyaUvdEZlZ9k=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/6/d7OX4gSbmIPOBJA5vYpw/cat.jpg',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://s2.glbimg.com/hzJUjecqvH_F_eIdyaUvdEZlZ9k=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/6/d7OX4gSbmIPOBJA5vYpw/cat.jpg',
            },
          },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
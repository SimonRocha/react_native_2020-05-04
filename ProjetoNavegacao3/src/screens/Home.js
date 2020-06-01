import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListCardEx5 from '../components/ListCardEx5'

export default class Home extends React.Component {
  state = {
    cursos: [
      {
        time: "15:00",
        title: "6 places elements places elements places elements ",
        user_name:"John",
        color: "#f4f",
        description: 'asjdoais asdjasj apsdjapso sapodapsodja posajdapsjd poasjdpoasjdpa',
        image: '../assets/images/cat.png'
      },
      {
        time: "15:30",
        title: "Ultimate test",
        user_name:"Carl",
        color: "#f4f",
        description: 'asjdoais asdjasj apsdjapso sapodapsodja posajdapsjd poasjdpoasjdpa',
        image: '../assets/images/cat.png'

      },
      {
        time: "16:00",
        title: "Using React Native",
        user_name:"Simon",
        description: 'asjdoais asdjasj apsdjapso sapodapsodja posajdapsjd poasjdpoasjdpa',
        image: '../assets/images/cat.png'
      }
    ]
  }

  render() {
    return (
      <ListCardEx5 navigation={this.props.navigation} data={this.state.cursos} />
    );
  }
}
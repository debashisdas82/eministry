import React from 'react';
import PropTypes from 'prop-types';
import {Row, DropDownMenu, ListView, GridRow, Caption, Card, Image, Tile, Subtitle, TouchableOpacity, View, ImageBackground, TextInput, Divider, Text, Button, Heading, Screen, NavigationBar, Title, Icon } from '@shoutem/ui';
import styles from './styles';
import * as constants from '../utils/constants'

class ContactUsScreen extends React.Component<Props, State> {
  
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: "None"},
        {name: "Dato Sri Najib Razak"},
        {name: "Dato Sri DR. Ahmed Zahid"},
        {name: "Dato Sri Jailani Johari"}

      ]
    }

  }

  render() {
    const selectedPerson = this.state.selectedPerson || this.state.persons[0];

    return (
  <Screen>
<NavigationBar 
      leftComponent={
        <Button
          onPress={() => this.props.navigation.navigate('DrawerToggle')}
        >
          <Icon name="sidebar" />
        </Button>
      }
      title={<Title>Contact Us</Title>}    
      styleName="inline"  
    />

  </Screen>
    );
  }
  


};




ContactUsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ContactUsScreen.navigationOptions = {
  title: 'Contact Us',
};

export default ContactUsScreen;

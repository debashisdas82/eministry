import React from 'react';
import PropTypes from 'prop-types';
import {Row, DropDownMenu, ListView, GridRow, Caption, Card, Image, Tile, Subtitle, TouchableOpacity, View, ImageBackground, TextInput, Divider, Text, Button, Heading, Screen, NavigationBar, Title, Icon } from '@shoutem/ui';
import styles from './styles';
import * as constants from '../utils/constants'

class ComplainScreen extends React.Component<Props, State> {
  
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
      title={<Heading>{constants.APP_NAME}</Heading>}    
      styleName="inline"  
    />
           
           
           <Tile styleName="clear">
      <Row styleName="horizontal">
          <Icon name="edit" />
          <Title>Write Down a Complaint</Title>
      </Row>
      </Tile>
      <TextInput styleName="md-gutter" 
        multiline={true}
        numberOfLines = {4}
        
        style={{height: 200, borderColor: 'gray', borderWidth: 1}}
      />
     

      <Tile styleName="clear">
      <Row styleName="horizontal">
          <Icon name="products" />
          <Title>Tag Someone</Title>
      </Row>

      <View styleName="content">
      <DropDownMenu
        styleName="horizontal md-gutter"
        options={this.state.persons}
        selectedOption={selectedPerson ? selectedPerson : this.state.persons[0]}
        onOptionSelected={(person) => this.setState({ selectedPerson: person })}
        titleProperty="name"
        valueProperty="name"
      />
      </View>
      </Tile>

      <Divider styleName="line" />
      <Button styleName="md-gutter"
        onPress={() => navigation.dispatch({ type: 'Login' })}
      >
        <Title styleName="md-gutter">Submit</Title>
    </Button>


  </Screen>
    );
  }
  


};




ComplainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ComplainScreen.navigationOptions = {
  title: 'Write a Complaint',
};

export default ComplainScreen;

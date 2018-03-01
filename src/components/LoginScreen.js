import React from 'react';
import PropTypes from 'prop-types';
import {ListView, GridRow, Caption, Card, Image, Tile, Subtitle, TouchableOpacity, View, ImageBackground, TextInput, Divider, Text, Button, Heading, Screen, NavigationBar, Title, Icon } from '@shoutem/ui'
import * as constants from '../utils/constants'
import styles from './styles';

const LoginScreen = ({ navigation }) => (
  

  <Screen>
    
    <NavigationBar 
      leftComponent={
        <Button
          onPress={() => navigation.navigate('DrawerToggle')}
        >
          <Icon name="sidebar" />
        </Button>
      }
      title={<Heading>{constants.APP_NAME}</Heading>}    
      styleName="inline"  
    />
           
      
      <TextInput styleName="md-gutter" 
        placeholder={'Email Address'}      
        autoCapitalize={'none'}  
      />
      <TextInput styleName="md-gutter" 
        placeholder={'Password'}
        secureTextEntry
      />
      

      <Button styleName="md-gutter"
        onPress={() => navigation.dispatch({ type: 'Login' })}
      >
        <Title styleName="md-gutter">Login</Title>
    </Button>


  </Screen>
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default LoginScreen;

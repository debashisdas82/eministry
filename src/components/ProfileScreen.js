import React from 'react';
import {Overlay, Spinner, ListView, GridRow, Caption, Card, Image, Tile, Subtitle, TouchableOpacity, View, ImageBackground, TextInput, Divider, Text, Button, Heading, Screen, NavigationBar, Title, Icon } from '@shoutem/ui'


class ProfileScreen extends React.Component<Props, State> {
  
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [
        {
          "name": "Mohd. Najib bin Tun Haji Abdul Razak, YAB Dato' Sri",
          "address": "Perdana Menteri Malaysia/Menteri Kewangan",
          "image": require('../assets/images/nazib-razak.jpg'),
        },
        {
          "name": "Ahmad Zahid Bin Hamidi, YAB Dato' Seri Dr.",
          "address": "Timbalan Perdana Menteri / Menteri Dalam Negeri",
          "image": require('../assets/images/ahmad_zahid1.jpg'),
        },
        {
          "name": "Jailani Bin Johari, YB Dato' Sri",
          "address": "Timbalan Menteri Komunikasi dan Multimedia",
          "image": require('../assets/images/jailani_johari1.jpg'),
        }
      ],
    }
  }
  
  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    if (index === '0') {
      return (
        <TouchableOpacity key={index}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('ProfileDtls', rowData[0]);
            }}        
        
        >
          <ImageBackground
            styleName="large"
            source={rowData[0].image}
          >
            <Tile>
              <Divider />
              <Divider />
              <Divider />
              <Divider />
              <Divider />
              <Subtitle styleName="sm-gutter-bottom">{rowData[0].name}</Subtitle>
              <Caption styleName="sm-gutter-horizontal">{rowData[0].address}</Caption>
            </Tile>
          </ImageBackground>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }
  
    const cellViews = rowData.map((restaurant, id) => {
      return (
        <TouchableOpacity key={id} styleName="flexible"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('ProfileDtls', restaurant);
            }}           
        >
          <Card styleName="flexible">
            <Image
              styleName="medium-portrait"
              source={restaurant.image}
            />
            <View styleName="content">
              <Subtitle numberOfLines={3}>{restaurant.name}</Subtitle>
              <View styleName="horizontal">
                <Caption styleName="collapsible" numberOfLines={2}>{restaurant.address}</Caption>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });
  
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }
  
  render() {
    const restaurants = this.state.restaurants;
    // Group the restaurants into rows with 2 columns, except for the
    // first restaurant. The first restaurant is treated as a featured restaurant
    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(restaurants, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
      return 1;
    });
  
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
          rightComponent={
            <Button
              onPress={() => this.props.navigation.navigate('DrawerToggle')}
            >
              <Icon name="search" />
            </Button>
          }
          
          title={<Heading>Profiles</Heading>}
          styleName="inline"
        />
        
                  
        <ListView
          data={groupedData}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
  


};

ProfileScreen.navigationOptions = {
  title: "Member Profiles",
};

export default ProfileScreen;

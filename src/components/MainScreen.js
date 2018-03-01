import React from 'react';
import {Overlay, Video, ImagePreview, InlineGallery, Lightbox, ImageGalleryOverlay, Row, ListView, GridRow, Caption, Card, Image, Tile, Subtitle, TouchableOpacity, View, ImageBackground, TextInput, Divider, Text, Button, Heading, Screen, NavigationBar, Title, Icon } from '@shoutem/ui'
import { ScrollView } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import * as constants from '../utils/constants'
import ProgressBar from '../utils/ProgressBar';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => 
<ScrollView>
<Row>
  <Image
    styleName="medium rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }}
  />
  <View styleName="vertical stretch space-between">
    <Subtitle>Take A Romantic Break In A Boutique Hotel</Subtitle>
    <View styleName="horizontal space-between">
      <Caption>3 days ago</Caption>
      <Caption>12:16</Caption>
    </View>
  </View>
</Row>

<Row>
  <Image
    styleName="medium rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }}
  />
  <View styleName="vertical stretch space-between">
    <Subtitle>Take A Romantic Break In A Boutique Hotel</Subtitle>
    <View styleName="horizontal space-between">
      <Caption>3 days ago</Caption>
      <Caption>12:16</Caption>
    </View>
  </View>
</Row>

<Row>
  <Image
    styleName="medium rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }}
  />
  <View styleName="vertical stretch space-between">
    <Subtitle>Take A Romantic Break In A Boutique Hotel</Subtitle>
    <View styleName="horizontal space-between">
      <Caption>3 days ago</Caption>
      <Caption>12:16</Caption>
    </View>
  </View>
</Row>

</ScrollView>
;
const SecondRoute = () => 
<View>
  <Image
    styleName="large-wide"
    source={require('../assets/images/election_result.png')}
  />
</View>;

class MainScreen extends React.Component {
  renderRow = this.renderRow.bind(this);
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'News' },
      { key: 'second', title: 'PRU-14' },
    ],
    restaurants: [
      {
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
      },
      {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      },
      {
        "name": "Kyoto Amber Upper East",
        "address": "225 Mulberry St, New York, NY 10012",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
      },
      {
        "name": "Sushi Academy",
        "address": "1900 Warner Ave. Unit A Santa Ana, CA",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
      },
      {
        "name": "Sushibo",
        "address": "35 Sipes Key, New York, NY 10012",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
      },
      {
        "name": "Mastergrill",
        "address": "550 Upton Rue, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
      }
    ],
    progress: "30",

  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  renderRow(restaurant) {
    return (
      <View>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    const restaurants = this.state.restaurants;
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

          title={<Title>{constants.APP_NAME}</Title>}
          styleName="inline"
        />

      <ScrollView style={styles.container}>
      <View styleName="flexible">
          <Video
              source={{ uri: 'https://www.youtube.com/watch?v=q6UEECitGrA' }}
              poster={'https://i.ytimg.com/vi/1tavDv5hXpo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB5H6NLcL2tWeeTPC8snOAqHZGgVw'}
          >
          </Video>
          
      </View>


      <TabViewAnimated
        style={styles.tabView}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
        
          </ScrollView>

      </Screen>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar: {
    opacity: 0.3,
  },
  tabView: {
    height: 500,
  }
});

MainScreen.navigationOptions = {
  title: 'Home',
};

export default MainScreen;

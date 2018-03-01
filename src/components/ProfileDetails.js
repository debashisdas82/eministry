import React, { PureComponent } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import BasicListView from './BasicListView';
import type { Route, NavigationState } from 'react-native-tab-view/types';
import {ScrollView, ImagePreview, InlineGallery, Lightbox, ImageGalleryOverlay, Row, ListView, GridRow, Caption, Card, Image, Tile, Subtitle, TouchableOpacity, View, ImageBackground, TextInput, Divider, Text, Button, Heading, Screen, NavigationBar, Title, Icon } from '@shoutem/ui'

type State = NavigationState<
  Route<{
    key: string,
    title: string,
  }>
>;

class ProfileDetails extends PureComponent<*, State> {
  static title = 'Scroll views';
  static backgroundColor = '#fff';
  static tintColor = '#222';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'About' },
      { key: '2', title: 'Schedule' },
      { key: '3', title: 'Photo' },
      { key: '4', title: 'News' },
      
    ],
  };

  _first: ?BasicListView;
  _second: ?BasicListView;
  _third: ?BasicListView;
  _forth: ?BasicListView;
  

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _handleTabItemPress = ({ route }) => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
    switch (route.key) {
      case '1':
        if (this._first) {
          this._first.scrollTo({ y: 0 });
        }
        break;
      case '2':
        if (this._second) {
          this._second.scrollTo({ y: 0 });
        }
        break;
      case '3':
        if (this._third) {
          this._third.scrollTo({ y: 0 });
        }
        break;
        case '4':
        if (this._forth) {
          this._forth.scrollTo({ y: 0 });
        }
        break;
        



      }
  };

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#D6356C' : '#222')
    );
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderHeader = props => (
    <TabBar
      {...props}
      pressColor="rgba(255, 64, 129, .5)"
      onTabPress={this._handleTabItemPress}
      renderLabel={this._renderLabel(props)}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tab}
      style={styles.tabbar}
    />
  );

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          
          <ScrollView>
            <Row>
              <View styleName="vertical space-between">
                  <Text>Name</Text>
                  <Subtitle>Mohd. Najib bin Tun Haji Abdul Razak, YAB Dato' Sri</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="vertical space-between">
                  <Text>Position in Cabinet</Text>
                  <Subtitle>Perdana Menteri Malaysia/Menteri Kewangan</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="horizontal space-between">
                  <Text>Party</Text>
                  <Subtitle>BN - UMNO</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="horizontal space-between">
                  <Text>Area</Text>
                  <Subtitle>Pekan</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="horizontal space-between">
                  <Text>State</Text>
                  <Subtitle>Pahang</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="horizontal space-between">
                  <Text>Phone Number</Text>
                  <Subtitle>03 – 8888 8010</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="horizontal space-between">
                  <Text>Fax No.</Text>
                  <Subtitle>03 – 8888 3973</Subtitle>
              </View>
            </Row>
            <Divider styleName="line"/>
            <Row>
              <View styleName="horizontal space-between">
                  <Text>E-Mail</Text>
                  <Subtitle>najib@pmo.gov.my</Subtitle>
              </View>
            </Row>




          </ScrollView>
    
        );
      case '2':
        return (
          <View>
<Row style={{ backgroundColor: '#eff9ec' }}>
<View styleName="vertical">
    <View styleName="content">
        <Title>28th Feb, 2018</Title>
    </View>
    
        <View styleName="horizontal space-between">
                    <Text>Cabinet Meeting</Text>
                    <Text>11:30 a.m.</Text>
        </View>  
        <View styleName="horizontal space-between">
                    <Text>Charity at Klang</Text>
                    <Text>1:00 p.m.</Text>
        </View>  
        <View styleName="horizontal space-between">
                    <Text>Party Meeting</Text>
                    <Text>3:00 p.m.</Text>
        </View>  


  </View> 
</Row>
<Divider styleName="line" />
<Row style={{ backgroundColor: '#E3F4DD' }}>
<View styleName="vertical">
    <View styleName="content">
        <Title>27th Feb, 2018</Title>
    </View>
    
        <View styleName="horizontal space-between">
                    <Text>Cabinet Meeting</Text>
                    <Text>11:30 a.m.</Text>
        </View>  
        <View styleName="horizontal space-between">
                    <Text>Charity at Klang</Text>
                    <Text>1:00 p.m.</Text>
        </View>  
        <View styleName="horizontal space-between">
                    <Text>Party Meeting</Text>
                    <Text>3:00 p.m.</Text>
        </View>  


  </View> 
</Row>

<Divider styleName="line" />
<Row style={{ backgroundColor: '#eff9ec' }}>
<View styleName="vertical">
    <View styleName="content">
        <Title>26th Feb, 2018</Title>
    </View>
    
        <View styleName="horizontal space-between">
                    <Text>Cabinet Meeting</Text>
                    <Text>11:30 a.m.</Text>
        </View>  
        <View styleName="horizontal space-between">
                    <Text>Charity at Klang</Text>
                    <Text>1:00 p.m.</Text>
        </View>  
        <View styleName="horizontal space-between">
                    <Text>Party Meeting</Text>
                    <Text>3:00 p.m.</Text>
        </View>  


  </View> 
</Row>

</View>
        );
      case '3':
        return (
          <View>
          <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
          <ImagePreview
    source={require('../assets/images/img-najib.jpg')}
    width={200}
    height={200}
  />
          <ImagePreview
    source={require('../assets/images/nazib_razak2.jpg')}
    width={200}
    height={200}
  />


  </View>

<View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >

          <ImagePreview
    source={require('../assets/images/nazib_razak4.jpg')}
    width={200}
    height={200}
  />
          <ImagePreview
    source={require('../assets/images/nazib-razak.jpg')}
    width={200}
    height={200}
  />

  </View>
  </View>
        );
        case '4':
        return(

<View>
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

</View>


        );
      default:
        return null;
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Screen>


<View>
<Row>
            <Button
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Icon name="left-arrow" />
            </Button>

  <Image
    styleName="small rounded-corners"
    source={params.image}
  />
  <View styleName="vertical space-between">
    <Subtitle>{params.name}</Subtitle>
    <Caption>{params.address}</Caption>
    <View styleName="horizontal space-between">
        <Button><Icon name="facebook" /></Button>
        <Button><Icon name="tweet" /></Button>
        <Button><Icon name="web" /></Button>
        
    </View>
  </View>
</Row>
</View>

      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />

      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#ff4081',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
    width: 90,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
});


ProfileDetails.navigationOptions = {
  drawerLabel: () => null
};

export default ProfileDetails;
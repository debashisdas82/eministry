import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import ProfileDetails from '../components/ProfileDetails';
import { addListener } from '../utils/redux';
import SideMenu from '../SideMenu/SideMenu';
import ComplainScreen from '../components/Complain';
import AboutUsScreen from '../components/AboutUs';
import ContactUsScreen from '../components/ContactUs';


export const AppNavigator = DrawerNavigator({
  Main: { screen: MainScreen },  
  Profile: { screen: ProfileScreen },
  Complain: { screen: ComplainScreen },
  Login: { screen: LoginScreen },
  About: { screen: AboutUsScreen },
  ContactUs: { screen: ContactUsScreen },
  ProfileDtls: { screen: ProfileDetails },
});


class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

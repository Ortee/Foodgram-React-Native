import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';

import Home from '../HomeComponent/home';
import Logo from '../LogoComponent/logo';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  navButtonRight: {
    backgroundColor: colors.dark,
    flexGrow: 1,
    borderLeftColor: colors.background,
    borderLeftWidth: 5,
  },
  navButtonLeft: {
    backgroundColor: colors.dark,
    flexGrow: 1,
    borderRightColor: colors.background,
    borderRightWidth: 5,
  },
  navButton: {
    backgroundColor: colors.dark,
    flexGrow: 1,
  },
  navButtonText: {
    color: colors.blue,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 13,
  },
  nav: {
    flex: 0.09,
    flexDirection: 'row',
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  content: {
    borderTopColor: colors.dark,
    borderTopWidth: 1,
    marginTop: 5,
    flex: 0.79,
    backgroundColor: colors.background,
  },
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.props.changeRoute('home');
  }
  renderContent = (name) => {
    if (name === 'home') {
      return <Home {...this.props}/>;
    }
    return <Text>No route</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <View style={styles.content}>
          {this.renderContent(this.props.route)}
        </View>
        <View style={styles.nav}>
          <TouchableHighlight style={styles.navButtonLeft} onPress={() => this.props.changeRoute('home')}>
            <Text style={styles.navButtonText}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.navButton} onPress={() => this.props.changeRoute('home')}>
            <Text style={styles.navButtonText}>Posts</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.navButtonRight} onPress={() => this.props.changeRoute('home')}>
            <Text style={styles.navButtonText}>Author</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Menu.propTypes =  {
  route: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
};

export default Menu;

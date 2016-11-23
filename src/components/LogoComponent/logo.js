import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    flex: 0.08,
    borderLeftColor: "#000000",
    borderWidth: 5
  },
  text:{
    fontSize: 40
  }
});

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.logo}>
        <Text style={styles.text}>FOODGRAM</Text>
      </View>
    );
  }
}

Logo.propTypes =  {
  route: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
};

export default Logo;

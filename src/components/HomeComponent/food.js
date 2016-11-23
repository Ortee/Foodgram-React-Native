import React, { Component } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  home: {
    borderLeftColor: colors.border,
    borderWidth: 1,
    marginTop: 10,
  },
  header: {
    borderLeftColor: colors.border,
    borderWidth: 1,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderColor: colors.border,
    borderWidth: 2,
  },
});

class Food extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.home}>
        <View style={styles.header}>
          <Text>REST_NAME</Text>
        </View>
        <View style={styles.photo}>
          <Text>PHOTO</Text>
        </View>
        <View style={styles.description}>
          <Text>DESCRIPTION</Text>
        </View>
      </View>
    );
  }
}

Food.propTypes =  {
  route: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
};

export default Food;

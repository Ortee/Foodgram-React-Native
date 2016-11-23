import React, { Component } from 'react';
import { StyleSheet, ScrollView} from 'react-native';

// import colors from '../../styles/colors';
import Food from './food';

const styles = StyleSheet.create({
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Food/>
        <Food/>
        <Food/>
        <Food/>
      </ScrollView>
    );
  }
}

Home.propTypes =  {
  route: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
};

export default Home;

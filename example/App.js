import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import KinSdk from 'react-native-kin-sdk';

export default class MainScreen extends React.Component {
  onPress = () => {
    KinSdk.onPressWallet();
  };

  render = () => (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.onPress}>
        <Text style={styles.text}>Click here to test wrapper</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 100,
  },
});

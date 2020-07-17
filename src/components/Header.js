import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera-outline" style={styles.sendIcon} />
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: 300,
          height: 47,
        }}
        resizeMode="contain"
      />
      <Ionicons name="paper-plane-outline" style={styles.sendIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#rgb(235, 235, 235)',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendIcon: {
    fontSize: 26,
  },
});

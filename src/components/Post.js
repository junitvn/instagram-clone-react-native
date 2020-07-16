import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Post(props) {
  const data = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={data.avatar}
          style={{width: 40, height: 40, borderRadius: 25}}
        />
        <Text style={styles.name}>{data.name}</Text>
      </View>
      <Image
        source={data.image}
        style={{height: 400, resizeMode: 'cover', width: null}}
      />
      <View style={styles.interactionContainer}>
        <Ionicons name="heart-outline" style={styles.loveIcon} />
        <Ionicons name="chatbubble-outline" style={styles.iconInteraction} />
        <Ionicons name="paper-plane-outline" style={styles.iconInteraction} />
      </View>
      <Text style={styles.textLikeCount}>{data.likeCount} likes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 7
  },
  userInfoContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    marginLeft: 12,
  },
  loveIcon: {
    fontSize: 33,
    marginLeft: 15,
  },
  iconInteraction: {
    fontSize: 28,
    marginLeft: 15,
    marginTop: 1,
  },
  interactionContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  textLikeCount: {
    fontSize: 15,
    marginLeft: 15
  },
});
